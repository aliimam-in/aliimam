/**
 * Auto-generated logo component: Time Duration 45 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimeDuration45OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimeDuration45OutlineLogo = React.forwardRef<SVGSVGElement, TimeDuration45OutlineLogoProps>(
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
      <path d="M13 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
  <path d="M7 9v2a1 1 0 0 0 1 1h1" />
  <path d="M10 9v6" />
  <path d="M7.5 4.2v.01" />
  <path d="M4.2 7.5v.01" />
  <path d="M3 12a9 9 0 1 0 9 -9" />
    </svg>
  )
);

TimeDuration45OutlineLogo.displayName = "TimeDuration45OutlineLogo";

export const TimeDuration45OutlineLogoMetadata = {
  id: "time-duration-45-outline",
  baseId: "time-duration-45-outline",
  variant: "default",
  name: "Time Duration 45 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimeDuration45OutlineLogo;
