
import * as React from "react"

export interface EggProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Egg = React.forwardRef<SVGSVGElement, EggProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"/>` }}
      {...props}
    />
  )
)

Egg.displayName = "Egg"
