
import * as React from "react"

export interface SwordProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Sword = React.forwardRef<SVGSVGElement, SwordProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="m11 19l-6-6m0 8l-2-2m5-3l-4 4m5.5-2.5L21 6V3h-3L6.5 14.5"/>` }}
      {...props}
    />
  )
)

Sword.displayName = "Sword"
