/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour6FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour6Filled = React.forwardRef<SVGSVGElement, ClockHour6FilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-6 12.16a1 1 0 0 0 2 0v-8.5a1 1 0 0 0 -2 0z" />
    </svg>
  )
);
ClockHour6Filled.displayName = "ClockHour6Filled";
export const ClockHour6FilledMetadata = { 
  id: "clock-hour-6_filled", 
  baseId: "clock-hour-6", 
  variant: "filled", 
  name: "Clock Hour 6", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockHour6Filled;
