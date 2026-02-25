/**
 * Auto-generated logo component: Time Duration Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimeDurationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimeDurationOffOutlineLogo = React.forwardRef<SVGSVGElement, TimeDurationOffOutlineLogoProps>(
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
      <path d="M3 12v.01" />
  <path d="M7.5 19.8v.01" />
  <path d="M4.2 16.5v.01" />
  <path d="M4.2 7.5v.01" />
  <path d="M12 21a8.994 8.994 0 0 0 6.362 -2.634m1.685 -2.336a9 9 0 0 0 -8.047 -13.03" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TimeDurationOffOutlineLogo.displayName = "TimeDurationOffOutlineLogo";

export const TimeDurationOffOutlineLogoMetadata = {
  id: "time-duration-off-outline",
  baseId: "time-duration-off-outline",
  variant: "default",
  name: "Time Duration Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimeDurationOffOutlineLogo;
