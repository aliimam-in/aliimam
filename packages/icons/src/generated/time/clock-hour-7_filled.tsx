/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour7FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour7Filled = React.forwardRef<SVGSVGElement, ClockHour7FilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.007 8.777l.007 -.117v-5a1 1 0 0 0 -2 0v4.696l-1.832 2.75a1 1 0 0 0 .184 1.316l.093 .07a1 1 0 0 0 1.387 -.277l2.024 -3.038l.06 -.116l.032 -.081l.03 -.109z" />
    </svg>
  )
);
ClockHour7Filled.displayName = "ClockHour7Filled";
export const ClockHour7FilledMetadata = { 
  id: "clock-hour-7_filled", 
  baseId: "clock-hour-7", 
  variant: "filled", 
  name: "Clock Hour 7", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockHour7Filled;
