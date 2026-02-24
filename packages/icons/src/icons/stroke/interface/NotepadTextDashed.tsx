
import * as React from "react"

export interface NotepadTextDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NotepadTextDashed = React.forwardRef<SVGSVGElement, NotepadTextDashedProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M8 2v4m4-4v4m4-4v4m0-2h2a2 2 0 0 1 2 2v2m0 4v2m0 4v2a2 2 0 0 1-2 2h-1m-4 0h-2m-4 0H6a2 2 0 0 1-2-2v-2m0-4v-2m0-4V6a2 2 0 0 1 2-2h2m0 6h6m-6 4h8m-8 4h5"/>` }}
      {...props}
    />
  )
)

NotepadTextDashed.displayName = "NotepadTextDashed"
