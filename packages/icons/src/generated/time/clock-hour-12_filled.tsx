/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour12FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour12Filled = React.forwardRef<SVGSVGElement, ClockHour12FilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
ClockHour12Filled.displayName = "ClockHour12Filled";
export const ClockHour12FilledMetadata = { 
  id: "clock-hour-12_filled", 
  baseId: "clock-hour-12", 
  variant: "filled", 
  name: "Clock Hour 12", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockHour12Filled;
