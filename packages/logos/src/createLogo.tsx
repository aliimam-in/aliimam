import * as React from "react"

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export function createLogo(body: string, displayName: string) {
  const Component = React.forwardRef<SVGSVGElement, LogoProps>(
    ({ size = 24, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor" 
        dangerouslySetInnerHTML={{ __html: body }}
        {...props}
      />
    )
  )

  Component.displayName = displayName

  return Component
}