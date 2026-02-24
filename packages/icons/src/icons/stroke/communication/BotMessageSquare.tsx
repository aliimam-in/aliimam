
import * as React from "react"

export interface BotMessageSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const BotMessageSquare = React.forwardRef<SVGSVGElement, BotMessageSquareProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"/>` }}
      {...props}
    />
  )
)

BotMessageSquare.displayName = "BotMessageSquare"
