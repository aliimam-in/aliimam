
import * as React from "react"

export interface ScanQrCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ScanQrCode = React.forwardRef<SVGSVGElement, ScanQrCodeProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><path d="M17 12v4a1 1 0 0 1-1 1h-4m5-14h2a2 2 0 0 1 2 2v2m-4 1V7m4 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 14h.01M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="5" height="5" x="7" y="7" rx="1"/></g>` }}
      {...props}
    />
  )
)

ScanQrCode.displayName = "ScanQrCode"
