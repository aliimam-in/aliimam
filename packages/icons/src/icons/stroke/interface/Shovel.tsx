
import * as React from "react"

export interface ShovelProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Shovel = React.forwardRef<SVGSVGElement, ShovelProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03a3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0zM3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293zm6-7l7.879-7.878"/>` }}
      {...props}
    />
  )
)

Shovel.displayName = "Shovel"
