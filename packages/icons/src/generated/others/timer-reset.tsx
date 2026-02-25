/**
 * Auto-generated logo component: Timer Reset (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimerResetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimerResetLogo = React.forwardRef<SVGSVGElement, TimerResetLogoProps>(
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
  <path d="M12 14v-4" />
  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
  <path d="M9 17H4v5" />
    </svg>
  )
);

TimerResetLogo.displayName = "TimerResetLogo";

export const TimerResetLogoMetadata = {
  id: "timer-reset",
  baseId: "timer-reset",
  variant: "default",
  name: "Timer Reset",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimerResetLogo;
