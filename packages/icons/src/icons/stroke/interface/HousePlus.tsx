
import * as React from "react"

export interface HousePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HousePlus = React.forwardRef<SVGSVGElement, HousePlusProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"/><path d="M14.8 12.4a1 1 0 0 0-.8-.4h-4a1 1 0 0 0-1 1v8m6-3h6m-3-3v6"/></g>` }}
      {...props}
    />
  )
)

HousePlus.displayName = "HousePlus"
