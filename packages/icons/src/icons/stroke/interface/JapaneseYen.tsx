
import * as React from "react"

export interface JapaneseYenProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const JapaneseYen = React.forwardRef<SVGSVGElement, JapaneseYenProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3M6 15h12M6 11h12"/>` }}
      {...props}
    />
  )
)

JapaneseYen.displayName = "JapaneseYen"
