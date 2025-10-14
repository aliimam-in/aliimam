//@ts-nocheck
import type { Shape } from "@/src/types/canvas"

type Bounds = { minX: number; minY: number; maxX: number; maxY: number }

function computeBounds(shapes: Shape[]): Bounds {
  if (shapes.length === 0) return { minX: 0, minY: 0, maxX: 1000, maxY: 1000 }
  let minX = Number.POSITIVE_INFINITY,
    minY = Number.POSITIVE_INFINITY,
    maxX = Number.NEGATIVE_INFINITY,
    maxY = Number.NEGATIVE_INFINITY
  for (const s of shapes) {
    if (!s.visible) continue
    const x1 = s.x
    const y1 = s.y
    const x2 = s.x + (s.width || 0)
    const y2 = s.y + (s.height || 0)
    minX = Math.min(minX, x1)
    minY = Math.min(minY, y1)
    maxX = Math.max(maxX, x2)
    maxY = Math.max(maxY, y2)
  }
  if (!Number.isFinite(minX)) return { minX: 0, minY: 0, maxX: 1000, maxY: 1000 }
  return { minX, minY, maxX, maxY }
}

// Helper to apply fill, stroke, and stroke-width to inner SVG
function styleInnerSvg(svgRaw: string, fill?: string, stroke?: string, strokeWidth?: number) {
  const isRealColor = (c?: string) => !!c && !/^(currentColor|none|transparent)$/i.test(c)

  let svg = svgRaw

  // Only map currentColor fills to a provided concrete color.
  if (isRealColor(fill)) {
    svg = svg.replace(/fill="currentColor"/gi, `fill="${fill!}"`)
    svg = svg.replace(/<svg([^>]*)>/i, (m, attrs) => {
      if (/style="/i.test(attrs)) {
        return `<svg${attrs.replace(/style="([^"]*)"/i, (mm, s) => `style="${s};color: ${fill}"`)}>`
      }
      return `<svg${attrs} style="color: ${fill}">`
    })
  } else if (fill && /^(none|transparent)$/i.test(fill)) {
    // Neutralize currentColor fills only if explicitly set to none/transparent
    svg = svg.replace(/fill="currentColor"/gi, 'fill="none"')
  }

  // Only map currentColor strokes to a provided stroke color or fallback to fill color.
  if (isRealColor(stroke)) {
    svg = svg.replace(/stroke="currentColor"/gi, `stroke="${stroke!}"`)
  } else if (isRealColor(fill)) {
    svg = svg.replace(/stroke="currentColor"/gi, `stroke="${fill!}"`)
  } else if (stroke && /^(none|transparent)$/i.test(stroke)) {
    svg = svg.replace(/stroke="currentColor"/gi, 'stroke="none"')
  }

  if (typeof strokeWidth === "number" && Number.isFinite(strokeWidth)) {
    svg = svg.replace(/strokeWidth="[^"]*"/gi, `strokeWidth="${strokeWidth}"`)
    svg = svg.replace(/stroke-width="[^"]*"/gi, `stroke-width="${strokeWidth}"`)
    svg = svg.replace(/<path\b([^>]*?)>/gi, (m, attrs) => {
      if (!/\bstrokeWidth=/.test(attrs) && !/\bstroke-width=/.test(attrs) && /\bstroke=/.test(attrs)) {
        return `<path ${attrs} strokeWidth="${strokeWidth}">`
      }
      return m
    })
    svg = svg.replace(/<svg\b([^>]*?)>/i, (m, attrs) => {
      const hasSW = /\bstrokeWidth=/.test(attrs) || /\bstroke-width=/.test(attrs)
      if (!hasSW) return `<svg ${attrs} strokeWidth="${strokeWidth}" stroke-width="${strokeWidth}">`
      return m
    })
  }

  return svg
}

function drawShape(ctx: CanvasRenderingContext2D, shape: Shape) {
  if (!shape.visible) return
  ctx.save()
  ctx.globalAlpha = shape.opacity

  ctx.translate(shape.x + shape.width / 2, shape.y + shape.height / 2)
  ctx.rotate((shape.rotation * Math.PI) / 180)
  ctx.translate(-(shape.x + shape.width / 2), -(shape.y + shape.height / 2))

  switch (shape.type) {
    case "rectangle": {
      ctx.fillStyle = shape.fill
      ctx.strokeStyle = shape.stroke
      ctx.lineWidth = shape.strokeWidth
      const r = (shape as any).cornerRadius || 0
      if (r > 0) {
        const rr = Math.min(r, shape.width / 2, shape.height / 2)
        ctx.beginPath()
        ctx.moveTo(shape.x + rr, shape.y)
        ctx.lineTo(shape.x + shape.width - rr, shape.y)
        ctx.arcTo(shape.x + shape.width, shape.y, shape.x + shape.width, shape.y + rr, rr)
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height - rr)
        ctx.arcTo(shape.x + shape.width, shape.y + shape.height, shape.x + shape.width - rr, shape.y + shape.height, rr)
        ctx.lineTo(shape.x + rr, shape.y + shape.height)
        ctx.arcTo(shape.x, shape.y + shape.height, shape.x, shape.y + shape.height - rr, rr)
        ctx.lineTo(shape.x, shape.y + rr)
        ctx.arcTo(shape.x, shape.y, shape.x + rr, shape.y, rr)
        ctx.closePath()
        if (shape.fill !== "none" && shape.fill !== "transparent") ctx.fill()
        if (shape.strokeWidth > 0) ctx.stroke()
      } else {
        ctx.beginPath()
        ctx.rect(shape.x, shape.y, shape.width, shape.height)
        if (shape.fill !== "none" && shape.fill !== "transparent") ctx.fill()
        if (shape.strokeWidth > 0) ctx.stroke()
      }
      break
    }
    case "ellipse": {
      ctx.fillStyle = shape.fill
      ctx.strokeStyle = shape.stroke
      ctx.lineWidth = shape.strokeWidth
      ctx.beginPath()
      ctx.ellipse(
        shape.x + shape.width / 2,
        shape.y + shape.height / 2,
        shape.width / 2,
        shape.height / 2,
        0,
        0,
        Math.PI * 2,
      )
      if (shape.fill !== "none" && shape.fill !== "transparent") ctx.fill()
      if (shape.strokeWidth > 0) ctx.stroke()
      break
    }
    case "line": {
      ctx.strokeStyle = shape.stroke
      ctx.lineWidth = shape.strokeWidth
      const line = shape as any
      ctx.beginPath()
      ctx.moveTo(shape.x, shape.y)
      ctx.lineTo(line.endX, line.endY)
      ctx.stroke()
      break
    }
    case "text": {
      const text = shape as any
      ctx.fillStyle = shape.fill
      ctx.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`
      ctx.textAlign = text.textAlign
      ctx.textBaseline = "top"
      ctx.fillText(text.content, shape.x, shape.y)
      break
    }
    case "svg": {
      const svgShape = shape as any
      const img = new Image()
      img.crossOrigin = "anonymous"
      const styled = styleInnerSvg(
        svgShape.svg,
        shape.fill || "currentColor",
        shape.stroke || "currentColor",
        shape.strokeWidth || 0,
      )
      const svgEncoded = encodeURIComponent(styled)
      img.src = `data:image/svg+xml;charset=utf-8,${svgEncoded}`
      ;(ctx as any).__deferImages = (ctx as any).__deferImages || []
      ;(ctx as any).__deferImages.push({
        img,
        x: shape.x,
        y: shape.y,
        w: shape.width,
        h: shape.height,
      })
      break
    }
  }

  ctx.restore()
}

async function drawAll(ctx: CanvasRenderingContext2D, shapes: Shape[]) {
  // First pass to queue images
  for (const s of shapes) drawShape(ctx, s)
  // Load all deferred images
  const pending: Promise<void>[] = []
  const defers = ((ctx as any).__deferImages || []) as {
    img: HTMLImageElement
    x: number
    y: number
    w: number
    h: number
  }[]
  for (const d of defers) {
    pending.push(
      new Promise((resolve) => {
        if (d.img.complete) {
          ctx.drawImage(d.img, d.x, d.y, d.w || 100, d.h || 100)
          resolve()
        } else {
          d.img.onload = () => {
            ctx.drawImage(d.img, d.x, d.y, d.w || 100, d.h || 100)
            resolve()
          }
          d.img.onerror = () => resolve()
        }
      }),
    )
  }
  await Promise.all(pending)
}

export async function exportAsPNG(shapes: Shape[]): Promise<Blob> {
  const { minX, minY, maxX, maxY } = computeBounds(shapes)
  const width = Math.max(1, Math.ceil(maxX - minX))
  const height = Math.max(1, Math.ceil(maxY - minY))
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")!
  ctx.clearRect(0, 0, width, height)
  ctx.save()
  ctx.translate(-minX, -minY)
  await drawAll(ctx, shapes)
  ctx.restore()
  return await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), "image/png"))
}

export async function exportAsJPG(shapes: Shape[], quality = 0.92): Promise<Blob> {
  const { minX, minY, maxX, maxY } = computeBounds(shapes)
  const width = Math.max(1, Math.ceil(maxX - minX))
  const height = Math.max(1, Math.ceil(maxY - minY))
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")!
  // white background for JPG
  ctx.fillStyle = "#ffffff"
  ctx.fillRect(0, 0, width, height)
  ctx.save()
  ctx.translate(-minX, -minY)
  await drawAll(ctx, shapes)
  ctx.restore()
  return await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), "image/jpeg", quality))
}

function escapeAttr(val: string) {
  return val.replace(/&/g, "&amp;").replace(/"/g, "&quot;")
}

export function generateSVGString(shapes: Shape[]): string {
  const { minX, minY, maxX, maxY } = computeBounds(shapes)
  const width = Math.max(1, maxX - minX)
  const height = Math.max(1, maxY - minY)

  const elements: string[] = []

  for (const s of shapes) {
    if (!s.visible) continue

    // Translate coordinates to 0,0 origin
    const x = s.x - minX
    const y = s.y - minY

    // Build transform for rotation around center
    const cx = x + s.width / 2
    const cy = y + s.height / 2
    const transform = s.rotation !== 0 ? `transform="rotate(${s.rotation} ${cx} ${cy})"` : ""

    // Build opacity attribute
    const opacity = s.opacity !== 1 ? `opacity="${s.opacity}"` : ""

    if (s.type === "rectangle") {
      const r = (s as any).cornerRadius || 0
      const fillAttr = s.fill === "none" || s.fill === "transparent" ? 'fill="none"' : `fill="${s.fill}"`

      if (r > 0) {
        const rr = Math.min(r, s.width / 2, s.height / 2)
        const d = [
          `M${x + rr},${y}`,
          `L${x + s.width - rr},${y}`,
          `Q${x + s.width},${y} ${x + s.width},${y + rr}`,
          `L${x + s.width},${y + s.height - rr}`,
          `Q${x + s.width},${y + s.height} ${x + s.width - rr},${y + s.height}`,
          `L${x + rr},${y + s.height}`,
          `Q${x},${y + s.height} ${x},${y + s.height - rr}`,
          `L${x},${y + rr}`,
          `Q${x},${y} ${x + rr},${y}`,
          "Z",
        ].join(" ")
        elements.push(
          `<path d="${d}" ${fillAttr} stroke="${s.stroke}" stroke-width="${s.strokeWidth}" ${opacity} ${transform} />`,
        )
      } else {
        elements.push(
          `<rect x="${x}" y="${y}" width="${s.width}" height="${s.height}" ${fillAttr} stroke="${s.stroke}" stroke-width="${s.strokeWidth}" ${opacity} ${transform} />`,
        )
      }
    } else if (s.type === "ellipse") {
      const cx = x + s.width / 2
      const cy = y + s.height / 2
      const rx = s.width / 2
      const ry = s.height / 2
      const fillAttr = s.fill === "none" || s.fill === "transparent" ? 'fill="none"' : `fill="${s.fill}"`

      elements.push(
        `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" ${fillAttr} stroke="${s.stroke}" stroke-width="${s.strokeWidth}" ${opacity} ${transform} />`,
      )
    } else if (s.type === "line") {
      const line = s as any
      const x2 = line.endX - minX
      const y2 = line.endY - minY
      elements.push(
        `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${s.stroke}" stroke-width="${s.strokeWidth}" ${opacity} ${transform} />`,
      )
    } else if (s.type === "text") {
      const t = s as any
      const textTransform = s.rotation !== 0 ? `transform="rotate(${s.rotation} ${x} ${y})"` : ""
      elements.push(
        `<text x="${x}" y="${y}" font-family="${escapeAttr(t.fontFamily)}" font-size="${t.fontSize}" font-weight="${t.fontWeight}" text-anchor="${t.textAlign === "center" ? "middle" : t.textAlign === "right" ? "end" : "start"}" fill="${s.fill}" ${opacity} ${textTransform}>${escapeAttr(t.content)}</text>`,
      )
    } else if (s.type === "svg") {
      const svgShape = s as any
      const innerStyled = styleInnerSvg(
        svgShape.svg,
        s.fill || "currentColor",
        s.stroke || "currentColor",
        s.strokeWidth || 0,
      )

      const innerContent = innerStyled.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "")

      const scaleX = 1,
        scaleY = 1
      const transforms = [`translate(${x},${y})`, `scale(${scaleX},${scaleY})`]

      if (s.rotation !== 0) {
        const rotCx = s.width / 2 / scaleX
        const rotCy = s.height / 2 / scaleY
        transforms.push(`rotate(${s.rotation} ${rotCx} ${rotCy})`)
      }

      elements.push(`<g transform="${transforms.join(" ")}" ${opacity}>${innerContent}</g>`)
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${elements.join("")}</svg>`
}

export function generateReactComponent(shapes: Shape[], componentName = "CustomIcon"): string {
  const svgContent = generateSVGString(shapes)

  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 100 100"
  const innerContent = svgContent.replace(/<svg[^>]*>/, "").replace(/<\/svg>/, "")

  return `import type { SVGProps } from "react";

const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="${viewBox}">
    ${innerContent}
  </svg>
);

export { ${componentName} };`
}

function ensureRootColor(svg: string, color: string) {
  return svg.replace(/<svg\b([^>]*?)>/, (m, attrs) => {
    const hasStyle = /style=/.test(attrs)
    if (hasStyle) {
      return `<svg ${attrs.replace(/style="([^"]*)"/, (mm: any, s: any) => `style="${s};color: ${color}"`)}>`
    }
    return `<svg ${attrs} style="color: ${color}">`
  })
}

export function colorizeSvg(svg: string, fillColor?: string, strokeColor?: string, strokeWidth?: number) {
  let out = svg
  const isRealColor = (c?: string) => !!c && !/^(currentColor|none|transparent)$/i.test(c)

  if (isRealColor(fillColor)) {
    out = out.replace(/fill="currentColor"/gi, `fill="${fillColor!}"`)
    out = out.replace(/<svg\b([^>]*?)>/i, (m, attrs) => {
      if (/style="/i.test(attrs)) {
        return `<svg ${attrs.replace(/style="([^"]*)"/i, (mm, s) => `style="${s};color: ${fillColor}"`)}>`
      }
      return `<svg ${attrs} style="color: ${fillColor}">`
    })
  } else if (fillColor && /^(none|transparent)$/i.test(fillColor)) {
    out = out.replace(/fill="currentColor"/gi, 'fill="none"')
  }

  if (isRealColor(strokeColor)) {
    out = out.replace(/stroke="currentColor"/gi, `stroke="${strokeColor!}"`)
  } else if (strokeColor && /^(none|transparent)$/i.test(strokeColor)) {
    out = out.replace(/stroke="currentColor"/gi, 'stroke="none"')
  } else if (isRealColor(fillColor)) {
    out = out.replace(/stroke="currentColor"/gi, `stroke="${fillColor!}"`)
  }

  if (typeof strokeWidth === "number" && Number.isFinite(strokeWidth)) {
    out = out.replace(/strokeWidth="[^"]*"/gi, `strokeWidth="${strokeWidth}"`)
    out = out.replace(/stroke-width="[^"]*"/gi, `stroke-width="${strokeWidth}"`)
    out = out.replace(/<path\b([^>]*?)>/gi, (m, attrs) => {
      if (!/\bstrokeWidth=/.test(attrs) && !/\bstroke-width=/.test(attrs) && /\bstroke=/.test(attrs)) {
        return `<path ${attrs} strokeWidth="${strokeWidth}">`
      }
      return m
    })
    out = out.replace(/<svg\b([^>]*?)>/i, (m, attrs) => {
      const hasSW = /\bstrokeWidth=/.test(attrs) || /\bstroke-width=/.test(attrs)
      if (!hasSW) return `<svg ${attrs} strokeWidth="${strokeWidth}" stroke-width="${strokeWidth}">`
      return m
    })
  }

  return out
}

export function renderShapeToSvg(s: any, x: number, y: number, elements: string[], opacity: string) {
  if (!s) return
}

