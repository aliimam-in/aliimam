/**
 * Auto-generated logo component: Time Duration 15 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimeDuration15OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimeDuration15OutlineLogo = React.forwardRef<SVGSVGElement, TimeDuration15OutlineLogoProps>(
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
      <path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
  <path d="M9 9v6" />
  <path d="M3 12v.01" />
  <path d="M12 21v.01" />
  <path d="M7.5 4.2v.01" />
  <path d="M16.5 19.8v.01" />
  <path d="M7.5 19.8v.01" />
  <path d="M4.2 16.5v.01" />
  <path d="M19.8 16.5v.01" />
  <path d="M4.2 7.5v.01" />
  <path d="M21 12a9 9 0 0 0 -9 -9" />
    </svg>
  )
);

TimeDuration15OutlineLogo.displayName = "TimeDuration15OutlineLogo";

export const TimeDuration15OutlineLogoMetadata = {
  id: "time-duration-15-outline",
  baseId: "time-duration-15-outline",
  variant: "default",
  name: "Time Duration 15 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimeDuration15OutlineLogo;
