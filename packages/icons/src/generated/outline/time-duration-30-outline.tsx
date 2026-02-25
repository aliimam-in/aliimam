/**
 * Auto-generated logo component: Time Duration 30 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimeDuration30OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimeDuration30OutlineLogo = React.forwardRef<SVGSVGElement, TimeDuration30OutlineLogoProps>(
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
      <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
  <path d="M8 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
  <path d="M3 12v.01" />
  <path d="M7.5 4.2v.01" />
  <path d="M7.5 19.8v.01" />
  <path d="M4.2 16.5v.01" />
  <path d="M4.2 7.5v.01" />
  <path d="M12 21a9 9 0 0 0 0 -18" />
    </svg>
  )
);

TimeDuration30OutlineLogo.displayName = "TimeDuration30OutlineLogo";

export const TimeDuration30OutlineLogoMetadata = {
  id: "time-duration-30-outline",
  baseId: "time-duration-30-outline",
  variant: "default",
  name: "Time Duration 30 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimeDuration30OutlineLogo;
