import * as React from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function createIcon(body: string, displayName: string) {
  const Component = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, strokeWidth = 2, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: body }}
        {...props}
      />
    )
  )

  Component.displayName = displayName

  return Component
}