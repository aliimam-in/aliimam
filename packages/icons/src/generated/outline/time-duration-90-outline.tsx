/**
 * Auto-generated logo component: Time Duration 90 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimeDuration90OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimeDuration90OutlineLogo = React.forwardRef<SVGSVGElement, TimeDuration90OutlineLogoProps>(
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
      <path d="M8 14.25c0 .414 .336 .75 .75 .75h1.5a.75 .75 0 0 0 .75 -.75v-4.5a.75 .75 0 0 0 -.75 -.75h-1.5a.75 .75 0 0 0 -.75 .75v1.5c0 .414 .336 .75 .75 .75h2.25" />
  <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

TimeDuration90OutlineLogo.displayName = "TimeDuration90OutlineLogo";

export const TimeDuration90OutlineLogoMetadata = {
  id: "time-duration-90-outline",
  baseId: "time-duration-90-outline",
  variant: "default",
  name: "Time Duration 90 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimeDuration90OutlineLogo;
