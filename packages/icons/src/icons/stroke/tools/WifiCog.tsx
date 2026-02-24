
import * as React from "react"

export interface WifiCogProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const WifiCog = React.forwardRef<SVGSVGElement, WifiCogProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="m14.305 19.53l.923-.382m0-2.296l-.923-.383m2.547-1.241l-.383-.923m.383 6.467l-.383.924m2.679-6.468l.383-.923m-.001 7.391l-.382-.924M2 7.82a15 15 0 0 1 20 0m-1.228 9.032l.924-.383m-.924 2.679l.924.383M5 11.858a10 10 0 0 1 11.5-1.785m-8 5.356a5 5 0 0 1 2.413-1.31"/><circle cx="18" cy="18" r="3"/></g>` }}
      {...props}
    />
  )
)

WifiCog.displayName = "WifiCog"
