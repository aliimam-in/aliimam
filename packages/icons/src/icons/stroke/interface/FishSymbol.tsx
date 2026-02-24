
import * as React from "react"

export interface FishSymbolProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const FishSymbol = React.forwardRef<SVGSVGElement, FishSymbolProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M2 16s9-15 20-4C11 23 2 8 2 8"/>` }}
      {...props}
    />
  )
)

FishSymbol.displayName = "FishSymbol"
