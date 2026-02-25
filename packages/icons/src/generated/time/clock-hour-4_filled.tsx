/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour4FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour4Filled = React.forwardRef<SVGSVGElement, ClockHour4FilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5.026l.009 .105l.02 .107l.04 .129l.048 .102l.046 .078l.042 .06l.069 .08l.088 .083l.083 .062l3 2a1 1 0 1 0 1.11 -1.664l-2.555 -1.704v-4.464a1 1 0 0 0 -.883 -.993z" />
    </svg>
  )
);
ClockHour4Filled.displayName = "ClockHour4Filled";
export const ClockHour4FilledMetadata = { 
  id: "clock-hour-4_filled", 
  baseId: "clock-hour-4", 
  variant: "filled", 
  name: "Clock Hour 4", 
  category: "time", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ClockHour4Filled;
