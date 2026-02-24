
import * as React from "react"

export interface FileAudio2Props extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FileAudio2 = React.forwardRef<SVGSVGElement, FileAudio2Props>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="3" cy="17" r="1"/><path d="M2 17v-3a4 4 0 0 1 8 0v3"/><circle cx="9" cy="17" r="1"/></g>` }}
      {...props}
    />
  )
)

FileAudio2.displayName = "FileAudio2"
