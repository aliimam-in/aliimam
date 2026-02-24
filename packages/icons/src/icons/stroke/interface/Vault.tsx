
import * as React from "react"

export interface VaultProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const Vault = React.forwardRef<SVGSVGElement, VaultProps>(
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
      dangerouslySetInnerHTML={{ __html: `<g fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="m7.9 7.9l2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="m13.4 10.6l2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="m7.9 16.1l2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="m13.4 13.4l2.7 2.7"/><circle cx="12" cy="12" r="2"/></g>` }}
      {...props}
    />
  )
)

Vault.displayName = "Vault"
