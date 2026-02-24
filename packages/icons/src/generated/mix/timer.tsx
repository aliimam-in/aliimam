/**
 * Auto-generated logo component: Timer (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimerLogo = React.forwardRef<SVGSVGElement, TimerLogoProps>(
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
      <line x1="10" x2="14" y1="2" y2="2" />
  <line x1="12" x2="15" y1="14" y2="11" />
  <circle cx="12" cy="14" r="8" />
    </svg>
  )
);

TimerLogo.displayName = "TimerLogo";

export const TimerLogoMetadata = {
  id: "timer",
  baseId: "timer",
  variant: "default",
  name: "Timer",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimerLogo;
