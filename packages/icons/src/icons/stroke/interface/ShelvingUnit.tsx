
import * as React from "react"

export interface ShelvingUnitProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ShelvingUnit = React.forwardRef<SVGSVGElement, ShelvingUnitProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3m8 8v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m8 2V2M4 12h16M4 20h16M4 2v20M4 4h16"/>` }}
      {...props}
    />
  )
)

ShelvingUnit.displayName = "ShelvingUnit"
