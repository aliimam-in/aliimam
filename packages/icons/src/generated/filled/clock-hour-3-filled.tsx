/**
 * Auto-generated logo component: Clock Hour 3 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour3FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour3FilledLogo = React.forwardRef<SVGSVGElement, ClockHour3FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0 -2h-2.5v-4a1 1 0 0 0 -.883 -.993z" />
    </svg>
  )
);

ClockHour3FilledLogo.displayName = "ClockHour3FilledLogo";

export const ClockHour3FilledLogoMetadata = {
  id: "clock-hour-3-filled",
  baseId: "clock-hour-3-filled",
  variant: "default",
  name: "Clock Hour 3 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour3FilledLogo;
