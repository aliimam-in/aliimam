
import * as React from "react"

export interface MemoryStickProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const MemoryStick = React.forwardRef<SVGSVGElement, MemoryStickProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12 12v-2m0 8v-2m4-4v-2m0 8v-2M2 11h1.5M20 18v-2m.5-5H22M4 18v-2m4-4v-2m0 8v-2"/><rect width="20" height="10" x="2" y="6" rx="2"/></g>` }}
      {...props}
    />
  )
)

MemoryStick.displayName = "MemoryStick"
