
import * as React from "react"

export interface ClipboardPasteProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ClipboardPaste = React.forwardRef<SVGSVGElement, ClipboardPasteProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M11 14h10M16 4h2a2 2 0 0 1 2 2v1.344M17 18l4-4l-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect width="8" height="4" x="8" y="2" rx="1"/></g>` }}
      {...props}
    />
  )
)

ClipboardPaste.displayName = "ClipboardPaste"
