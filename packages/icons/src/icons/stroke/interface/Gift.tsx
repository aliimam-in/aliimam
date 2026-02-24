
import * as React from "react"

export interface GiftProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Gift = React.forwardRef<SVGSVGElement, GiftProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v14m8-10v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m3.5-4a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5a1 1 0 0 1 0 5"/><rect width="18" height="4" x="3" y="7" rx="1"/></g>` }}
      {...props}
    />
  )
)

Gift.displayName = "Gift"
