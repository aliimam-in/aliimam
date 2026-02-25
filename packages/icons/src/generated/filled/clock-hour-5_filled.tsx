/**
 * Auto-generated logo component: Clock Hour 5 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour5FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour5FilledLogo = React.forwardRef<SVGSVGElement, ClockHour5FilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 3.66v5.022l.003 .054l.02 .135l.005 .025a1 1 0 0 0 .056 .165l.04 .082l.04 .065l2.004 3.007a1 1 0 1 0 1.664 -1.11l-1.832 -2.748v-4.697a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1" />
    </svg>
  )
);

ClockHour5FilledLogo.displayName = "ClockHour5FilledLogo";

export const ClockHour5FilledLogoMetadata = {
  id: "clock-hour-5_filled",
  baseId: "clock-hour-5",
  variant: "filled",
  name: "Clock Hour 5",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour5FilledLogo;
