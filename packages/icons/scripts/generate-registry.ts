//@ts-nocheck
/**
 * scripts/generate-registry.ts
 *
 * Run:  tsx scripts/generate-registry.ts
 *
 * Reads:  ./src/generated/logos.json  (icon index)
 *         ./src/generated/<category>/<icon>.tsx  (actual source files)
 *
 * Writes: ../../apps/www/public/r/registry.json
 *         ../../apps/www/public/r/<icon-id>.json  ← with file content embedded
 *         ../../apps/www/public/r/icons-all.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ─── Types ────────────────────────────────────────────────────────────────────

interface IconEntry {
  id: string;
  baseId: string;
  variant: string;
  name: string;
  path: string; // e.g. ./generated/align/align-center-horizontal.tsx
  category: string;
  url: string;
  tags: string[];
  viewBox: string;
}

interface IconIndex {
  version: string;
  lastUpdated: string;
  logos: IconEntry[];
}

interface RegistryFile {
  path: string;
  content: string;
  type: "registry:ui";
}

interface RegistryItem {
  $schema: string;
  name: string;
  type: "registry:ui";
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface RegistryIndexItem {
  name: string;
  type: "registry:ui";
  title: string;
  description: string;
  files: { path: string; type: "registry:ui" }[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryIndexItem[];
}

// ─── Config ───────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const INPUT_FILE        = process.argv[2] || path.join(ROOT, "src/generated/logos.json");
const GENERATED_DIR     = path.join(ROOT, "src/generated");  // where .tsx files live
const OUTPUT_DIR        = process.argv[3] || path.join(ROOT, "../../apps/www/public/r");
const REGISTRY_NAME     = "@aliimam/icons";
const REGISTRY_HOMEPAGE = "https://aliimam.in";
const ICON_REGISTRY_DIR = "registry/icons"; // path shown inside registry item

const SCHEMAS = {
  registry: "https://ui.shadcn.com/schema/registry.json",
  item:     "https://ui.shadcn.com/schema/registry-item.json",
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * ./generated/align/align-center-horizontal.tsx
 *   → registry/icons/align/align-center-horizontal.tsx
 */
function toRegistryPath(iconPath: string): string {
  const relative = iconPath.replace(/^\.?\/?generated\//, "");
  return `${ICON_REGISTRY_DIR}/${relative}`;
}

/**
 * Read actual .tsx source from disk.
 * iconPath is relative like  ./generated/align/align-center-horizontal.tsx
 */
function readIconSource(iconPath: string): string {
  // Strip leading "./" so we can join safely
  const relative = iconPath.replace(/^\.\//, "");
  const full = path.join(ROOT, "src", relative);

  if (!fs.existsSync(full)) {
    console.warn(`  ⚠️  Source not found, skipping content: ${full}`);
    return "";
  }
  return fs.readFileSync(full, "utf-8");
}

function writeJson(filePath: string, data: unknown): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main(): void {
  // 1. Load logos.json
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`\n❌  Not found: ${INPUT_FILE}\n`);
    process.exit(1);
  }

  const raw: IconIndex = JSON.parse(fs.readFileSync(INPUT_FILE, "utf-8"));
  const icons: IconEntry[] = raw.logos ?? (raw as unknown as IconEntry[]);

  const registryIndexItems: RegistryIndexItem[] = [];

  // 2. One JSON file per icon — with content embedded
  for (const icon of icons) {
    const registryPath = toRegistryPath(icon.path);
    const content      = readIconSource(icon.path);

    const item: RegistryItem = {
      $schema:              SCHEMAS.item,
      name:                 icon.id,
      type:                 "registry:ui",
      title:                icon.name,
      description:          `${icon.name} icon component`,
      category:             icon.category,
      tags:                 icon.tags ?? [],
      dependencies:         [],
      devDependencies:      [],
      registryDependencies: [],
      files: [
        {
          path:    registryPath,
          content: content,
          type:    "registry:ui",
        },
      ],
    };

    writeJson(path.join(OUTPUT_DIR, `${icon.id}.json`), item);

    // Slim version for registry.json index (no content embedded)
    registryIndexItems.push({
      name:        icon.id,
      type:        "registry:ui",
      title:       icon.name,
      description: `${icon.name} icon component`,
      files: [{ path: registryPath, type: "registry:ui" }],
    });
  }

  // 3. registry.json
  const registry: Registry = {
    $schema:  SCHEMAS.registry,
    name:     REGISTRY_NAME,
    homepage: REGISTRY_HOMEPAGE,
    items:    registryIndexItems,
  };

  writeJson(path.join(OUTPUT_DIR, "registry.json"), registry);

  // 4. icons-all.json — install everything in one command (content embedded)
  const allFiles: RegistryFile[] = icons.map((icon) => ({
    path:    toRegistryPath(icon.path),
    content: readIconSource(icon.path),
    type:    "registry:ui",
  }));

  const allItem: RegistryItem = {
    $schema:              SCHEMAS.item,
    name:                 "icons-all",
    type:                 "registry:ui",
    title:                "All Icons",
    description:          "Complete @aliimam/icons library — installs every icon.",
    dependencies:         [],
    devDependencies:      [],
    registryDependencies: [],
    files:                allFiles,
  };

  writeJson(path.join(OUTPUT_DIR, "icons-all.json"), allItem);

  // 5. Summary
  console.log(`\n✅ shadcn registry generated!\n`);
  console.log(`   Icons      : ${icons.length}`);
  console.log(`   Input      : ${INPUT_FILE}`);
  console.log(`   Output     : ${OUTPUT_DIR}\n`);
  console.log(`   Install one icon:`);
  console.log(`   npx shadcn add ${REGISTRY_HOMEPAGE}/r/<icon-id>.json\n`);
  console.log(`   Install all icons:`);
  console.log(`   npx shadcn add ${REGISTRY_HOMEPAGE}/r/icons-all.json\n`);
}

main();