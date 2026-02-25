/**
 * Auto-generated logo component: Clock Hour 6 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour6FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour6FilledLogo = React.forwardRef<SVGSVGElement, ClockHour6FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 12.16a1 1 0 0 0 2 0v-8.5a1 1 0 0 0 -2 0z" />
    </svg>
  )
);

ClockHour6FilledLogo.displayName = "ClockHour6FilledLogo";

export const ClockHour6FilledLogoMetadata = {
  id: "clock-hour-6-filled",
  baseId: "clock-hour-6-filled",
  variant: "default",
  name: "Clock Hour 6 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour6FilledLogo;
