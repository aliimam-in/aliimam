
import * as React from "react"

export interface IdCardLanyardProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IdCardLanyard = React.forwardRef<SVGSVGElement, IdCardLanyardProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M13.5 8h-3M15 2l-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22M9 2l3 6"/><circle cx="12" cy="15" r="3"/></g>` }}
      {...props}
    />
  )
)

IdCardLanyard.displayName = "IdCardLanyard"
