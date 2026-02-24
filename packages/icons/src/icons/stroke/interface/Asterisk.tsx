
import * as React from "react"

export interface AsteriskProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Asterisk = React.forwardRef<SVGSVGElement, AsteriskProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 6v12m5.196-9L6.804 15m0-6l10.392 6"/>` }}
      {...props}
    />
  )
)

Asterisk.displayName = "Asterisk"
