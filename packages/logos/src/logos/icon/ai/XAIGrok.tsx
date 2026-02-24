
import * as React from "react"

export interface XAIGrokProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const XAIGrok = React.forwardRef<SVGSVGElement, XAIGrokProps>(
  ({ size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" 
      dangerouslySetInnerHTML={{ __html: `<path fill='currentColor' d='M18.7841 7.73065L19.1998 24H22.5297L22.946 1.80804L18.7841 7.73065ZM22.946 0H17.8651L9.89206 11.3467L12.4325 14.9618L22.946 0ZM1 24H6.08089L8.62183 20.3849L6.08089 16.7693L1 24ZM1 7.73065L12.4325 24H17.5134L6.08089 7.73065H1Z'/>` }}
      {...props}
    />
  )
)

XAIGrok.displayName = "XAIGrok"
