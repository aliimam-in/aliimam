/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour5FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour5Filled = React.forwardRef<SVGSVGElement, ClockHour5FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 3.66v5.022l.003 .054l.02 .135l.005 .025a1 1 0 0 0 .056 .165l.04 .082l.04 .065l2.004 3.007a1 1 0 1 0 1.664 -1.11l-1.832 -2.748v-4.697a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1" />
    </svg>
  )
);
ClockHour5Filled.displayName = "ClockHour5Filled";
export const ClockHour5FilledMetadata = { 
  id: "clock-hour-5_filled", 
  baseId: "clock-hour-5", 
  variant: "filled", 
  name: "Clock Hour 5", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockHour5Filled;
