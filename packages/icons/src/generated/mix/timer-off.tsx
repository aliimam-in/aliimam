/**
 * Auto-generated logo component: Timer Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimerOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimerOffLogo = React.forwardRef<SVGSVGElement, TimerOffLogoProps>(
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
      <path d="M10 2h4" />
  <path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
  <path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
  <path d="m2 2 20 20" />
  <path d="M12 12v-2" />
    </svg>
  )
);

TimerOffLogo.displayName = "TimerOffLogo";

export const TimerOffLogoMetadata = {
  id: "timer-off",
  baseId: "timer-off",
  variant: "default",
  name: "Timer Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimerOffLogo;
