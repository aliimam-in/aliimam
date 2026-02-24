 import { MetadataRoute } from "next"
import { getAllBlockIds } from "@/src/lib/blocks"
import { blogSource, source } from "@/src/lib/source"
import { iconIcons, wordmarkIcons, solidIcons, strokeIcons, pixelIcons  } from "@/src/lib/icons"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aliimam.in"
  const now = new Date()

  // Core static routes (highest SEO weight)
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "ai", priority: 0.8 },
    { path: "blocks", priority: 0.95 },
    { path: "patterns", priority: 0.95 },
    { path: "blogs", priority: 0.9 },
    { path: "docs", priority: 0.85 },
    { path: "pricing", priority: 0.8 },
    { path: "pages", priority: 0.7 },
    { path: "icons", priority: 0.9 },
    { path: "logos", priority: 0.7 }, 
    { path: "vectors", priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${baseUrl}/${path}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority,
  }))
  
 
  const blockIds = await getAllBlockIds()

  const blockViewRoutes = blockIds.map((id) => ({
    url: `${baseUrl}/view/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
 
  const posts = await blogSource.getPages()
  const docs = await source.getPages()
 
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slugs.join("/")}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Documentation routes
  const docRoutes = docs.map((post) => ({
    url: `${baseUrl}/docs/${post.slugs.join("/")}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const iconSets = { solidIcons, strokeIcons, pixelIcons }
  const iconRoutes = Object.entries(iconSets).flatMap(([variant, set]) =>
    Object.keys(set).map((name) => ({
      url: `${baseUrl}/icons/${name}?variant=${variant.replace("Icons", "").toLowerCase()}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  )
 
  const logoSets = { iconIcons, wordmarkIcons }
  const logoRoutes = Object.entries(logoSets).flatMap(([variant, set]) =>
    Object.keys(set).map((name) => ({
      url: `${baseUrl}/logos/${name}?variant=${variant.replace("Icons", "").toLowerCase()}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  )

  // Combine and sort by priority (optional but clean)
  return [
    ...staticRoutes, 
    ...blockViewRoutes,
    ...blogRoutes,
    ...docRoutes,
    ...iconRoutes,
    ...logoRoutes,
  ].sort((a, b) => b.priority - a.priority)
}
