/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from "next"
import { getAllBlockIds } from "@/src/lib/blocks"
import { blogSource, source } from "@/src/lib/source"
import { allIcons } from "@aliimam/icons"
import { allLogos } from "@aliimam/logos"
import { allVectors } from "@aliimam/vectors"

function getAllIconBaseIds() {
  const seen = new Set<string>()

  Object.values(allIcons).forEach((logos) => {
    Object.values(logos as any).forEach((entry: any) => {
      seen.add(entry.metadata.baseId)
    })
  })

  return Array.from(seen)
}

function getAllLogoBaseIds() {
  const seen = new Set<string>()

  Object.values(allLogos).forEach((logos) => {
    Object.values(logos as any).forEach((entry: any) => {
      seen.add(entry.metadata.baseId)
    })
  })

  return Array.from(seen)
}

function getAllVectorBaseIds() {
  const seen = new Set<string>()

  Object.values(allVectors).forEach((logos) => {
    Object.values(logos as any).forEach((entry: any) => {
      seen.add(entry.metadata.baseId)
    })
  })

  return Array.from(seen)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://aliimam.in"
  const now = new Date()

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

  const iconBaseIds = getAllIconBaseIds()
  const logoBaseIds = getAllLogoBaseIds()
  const vectorBaseIds = getAllVectorBaseIds()

  const iconRoutes = iconBaseIds.map((id) => ({
    url: `${baseUrl}/icons/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const logoRoutes = logoBaseIds.map((id) => ({
    url: `${baseUrl}/logos/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const vectorRoutes = vectorBaseIds.map((id) => ({
    url: `${baseUrl}/vectors/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Combine and sort by priority (optional but clean)
  return [
    ...staticRoutes,
    ...blockViewRoutes,
    ...blogRoutes,
    ...docRoutes,
    ...iconRoutes,
    ...logoRoutes,
    ...vectorRoutes,
  ].sort((a, b) => b.priority - a.priority)
}
