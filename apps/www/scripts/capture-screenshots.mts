/**
 * Screenshot Capture Script — sitemap.xml se pages fetch karta hai
 * Usage: tsx --tsconfig ./tsconfig.scripts.json ./scripts/capture-screenshots.mts
 *
 * Requirements:
 *   npm install -D playwright @playwright/test
 *   npx playwright install chromium
 */

import { chromium, type Page } from "playwright"
import * as fs from "fs"
import * as path from "path"

// ─────────────────────────────────────────────
// CONFIG { name: "mobile", width: 375, height: 812 },
// ─────────────────────────────────────────────

const CONFIG = {
  baseUrl: "http://localhost:4000",
  sitemapUrl: "http://localhost:4000/sitemap.xml",

  // Viewports — apne custom sizes yahan add/edit karein
  viewports: [
    { name: "desktop", width: 1440, height: 900 }, 
  ],

  // Themes
  themes: ["light", "dark"] as const,

  // Output folder
  outputDir: "./public/ss",

  // Delay after theme apply (ms)
  settleDelay: 10000,

  // true = full scroll screenshot, false = viewport only
  fullPage: true,

  // Screenshot format
  format: "png" as "png" | "jpeg",

  // Sitemap se ye patterns wale pages skip ho jayenge
  skipPatterns: [
    /\/icons\//,
    /\/logos\//,
    /\/vectors\//,    // block view routes (bahut zyada hote hain)
  ],
}

// ─────────────────────────────────────────────
// SITEMAP PARSER
// ─────────────────────────────────────────────

async function fetchPagesFromSitemap(): Promise<
  { name: string; path: string; url: string }[]
> {
  console.log(`\n🗺️  Sitemap fetch kar raha hoon: ${CONFIG.sitemapUrl}`)

  const res = await fetch(CONFIG.sitemapUrl)
  if (!res.ok) {
    throw new Error(
      `Sitemap fetch failed: ${res.status} ${res.statusText}\nMake sure dev server chal raha hai: ${CONFIG.baseUrl}`
    )
  }

  const xml = await res.text()

  // Extract all <loc> URLs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
  const allUrls = locMatches.map((m) => m[1].trim())

  console.log(`   Total URLs found : ${allUrls.length}`)

  // Filter skip patterns
  const filteredUrls = allUrls.filter(
    (url) => !CONFIG.skipPatterns.some((pattern) => pattern.test(url))
  )

  console.log(
    `   After filtering  : ${filteredUrls.length} (${allUrls.length - filteredUrls.length} skipped)\n`
  )

  // Convert to page objects
  return filteredUrls.map((url) => {
    // Production baseUrl ko local se replace karein
    const localUrl = url.replace(/^https?:\/\/[^/]+/, CONFIG.baseUrl)
    const urlPath = localUrl.replace(CONFIG.baseUrl, "") || "/"
    const name =
      urlPath === "/"
        ? "home"
        : urlPath.replace(/^\//, "").replace(/\//g, "_")

    return { name, path: urlPath, url: localUrl }
  })
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

async function setTheme(page: Page, theme: "light" | "dark") {
  await page.evaluate((t) => {
    document.documentElement.setAttribute("data-theme", t)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(t)
    localStorage.setItem("theme", t)
  }, theme)
  await page.waitForTimeout(300)
}

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────

async function captureScreenshots() {
  // 1. Sitemap se pages fetch karein
  const pages = await fetchPagesFromSitemap()

  const browser = await chromium.launch({ headless: true })
  const total = pages.length * CONFIG.viewports.length * CONFIG.themes.length

  console.log(`📸 Screenshot Capture Started`)
  console.log(`   Pages     : ${pages.length}`)
  console.log(`   Viewports : ${CONFIG.viewports.length}`)
  console.log(`   Themes    : ${CONFIG.themes.join(", ")}`)
  console.log(`   Total     : ${total} screenshots`)
  console.log(`   Output    : ${path.resolve(CONFIG.outputDir)}\n`)

  ensureDir(CONFIG.outputDir)

  let success = 0
  let failed = 0
  const errors: string[] = []

  for (const viewport of CONFIG.viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    })

    const page = await context.newPage()

    console.log(
      `\n📐 Viewport: ${viewport.name} (${viewport.width}x${viewport.height})`
    )
    console.log(`${"─".repeat(55)}`)

    for (const pageConfig of pages) {
      for (const theme of CONFIG.themes) {
        const label = `[${theme}] ${pageConfig.path}`

        try {
          await page.goto(pageConfig.url, {
            waitUntil: "networkidle",
            timeout: 30000,
          })

          await setTheme(page, theme)
          await page.waitForTimeout(CONFIG.settleDelay)

          // Folder structure: screenshots/desktop/light/home.png
          const themeDir = path.join(CONFIG.outputDir, viewport.name, theme)
          ensureDir(themeDir)

          const filename = `${pageConfig.name}.${CONFIG.format}`
          const outputPath = path.join(themeDir, filename)

          await page.screenshot({
            path: outputPath,
            fullPage: CONFIG.fullPage,
            type: CONFIG.format,
          })

          success++
          console.log(`  ✅ ${label}`)
        } catch (err) {
          failed++
          const msg = `  ❌ ${label}: ${(err as Error).message}`
          console.error(msg)
          errors.push(msg)
        }
      }
    }

    await context.close()
  }

  await browser.close()

  // ── Summary ──────────────────────────────────
  console.log(`\n${"═".repeat(55)}`)
  console.log(`📊 Summary`)
  console.log(`   Success : ${success} / ${total}`)
  console.log(`   Failed  : ${failed}`)

  if (errors.length > 0) {
    console.log(`\n⚠️  Errors:`)
    errors.forEach((e) => console.log(e))
  }

  console.log(`\n✅ Screenshots saved to: ${path.resolve(CONFIG.outputDir)}`)
  console.log(`
📁 Folder structure:
   screenshots/
     desktop/
       light/   ← page.png
       dark/    ← page.png
     tablet/
       light/
       dark/
     mobile/
       light/
       dark/
  `)
  console.log(`${"═".repeat(55)}\n`)
}

captureScreenshots().catch((err) => {
  console.error("Fatal error:", err)
  process.exit(1)
})