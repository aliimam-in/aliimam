
import * as React from "react"

export interface HardDriveProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const HardDrive = React.forwardRef<SVGSVGElement, HardDriveProps>(
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
      dangerouslySetInnerHTML={{ __html: `<path fill="none" stroke="currentColor" stroke-width="2" d="M10 16h.01m-7.798-4.423a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zm19.734.436H2.054M6 16h.01"/>` }}
      {...props}
    />
  )
)

HardDrive.displayName = "HardDrive"
