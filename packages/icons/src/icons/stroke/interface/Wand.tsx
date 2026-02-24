
import * as React from "react"

export interface WandProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Wand = React.forwardRef<SVGSVGElement, WandProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-4-4h.01m2.79-2.8L19 5M3 21l9-9m.2-5.8L11 5"/>` }}
      {...props}
    />
  )
)

Wand.displayName = "Wand"
