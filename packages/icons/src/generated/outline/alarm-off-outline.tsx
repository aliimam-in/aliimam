/**
 * Auto-generated logo component: Alarm Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlarmOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlarmOffOutlineLogo = React.forwardRef<SVGSVGElement, AlarmOffOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" />
  <path d="M12 12v1h1" />
  <path d="M5.261 5.265l-1.011 .735" />
  <path d="M17 4l2.75 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AlarmOffOutlineLogo.displayName = "AlarmOffOutlineLogo";

export const AlarmOffOutlineLogoMetadata = {
  id: "alarm-off-outline",
  baseId: "alarm-off-outline",
  variant: "default",
  name: "Alarm Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlarmOffOutlineLogo;
