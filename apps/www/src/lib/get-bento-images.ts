import fs from "fs";
import path from "path";
import { blocks as registryBlocks } from "@/registry/registry-blocks";

export type BentoBlock = {
  name: string;
  category: string;
  href: string;
  light: string;
  dark: string;
};

const R_DIR = path.join(process.cwd(), "public", "r");
 
const ALLOWED_CATEGORIES = new Set([
  "hero",
  "pricing",
  "features",
  "logos",
]);

export function getBentoBlocks(): BentoBlock[] {
  if (!fs.existsSync(R_DIR)) return [];

  const files = fs.readdirSync(R_DIR);
  const imageMap = new Map<string, { light?: string; dark?: string }>();

  for (const file of files) {
    const match = file.match(/(.+)-(light|dark)\.png$/i);
    if (!match) continue;

    const [, name, theme] = match;

    if (!imageMap.has(name)) imageMap.set(name, {});
    imageMap.get(name)![theme as "light" | "dark"] = `/r/${file}`;
  }

  return registryBlocks
    // ✅ filter by allowed categories
    .filter((block) =>
      block.categories?.some((c) => ALLOWED_CATEGORIES.has(c))
    )
    .map((block) => {
      const image = imageMap.get(block.name);
      if (!image?.light || !image.dark) return null;

      const category =
        block.categories?.find((c) => ALLOWED_CATEGORIES.has(c)) ?? "other";

      return {
        name: block.name,
        category,
        href: `/blocks/${category}`,
        light: image.light,
        dark: image.dark,
      };
    })
    .filter(Boolean) as BentoBlock[];
}
