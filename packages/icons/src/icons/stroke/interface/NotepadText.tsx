
import * as React from "react"

export interface NotepadTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const NotepadText = React.forwardRef<SVGSVGElement, NotepadTextProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4m4-4v4m4-4v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6m-6 4h8m-8 4h5"/></g>` }}
      {...props}
    />
  )
)

NotepadText.displayName = "NotepadText"
