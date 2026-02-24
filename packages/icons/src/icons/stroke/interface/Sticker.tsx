
import * as React from "react"

export interface StickerProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Sticker = React.forwardRef<SVGSVGElement, StickerProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="M15 3v5a1 1 0 0 0 1 1h5M8 13h.01M16 13h.01M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></g>` }}
      {...props}
    />
  )
)

Sticker.displayName = "Sticker"
