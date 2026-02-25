/**
 * Auto-generated logo component: Clock Hour 12 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour12FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour12FilledLogo = React.forwardRef<SVGSVGElement, ClockHour12FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

ClockHour12FilledLogo.displayName = "ClockHour12FilledLogo";

export const ClockHour12FilledLogoMetadata = {
  id: "clock-hour-12_filled",
  baseId: "clock-hour-12",
  variant: "filled",
  name: "Clock Hour 12",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour12FilledLogo;
