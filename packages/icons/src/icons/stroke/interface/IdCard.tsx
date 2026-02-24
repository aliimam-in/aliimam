
import * as React from "react"

export interface IdCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const IdCard = React.forwardRef<SVGSVGElement, IdCardProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect width="20" height="14" x="2" y="5" rx="2"/></g>` }}
      {...props}
    />
  )
)

IdCard.displayName = "IdCard"
