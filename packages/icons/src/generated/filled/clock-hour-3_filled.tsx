/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour3Filled = React.forwardRef<SVGSVGElement, ClockHour3FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 0 -2h-2.5v-4a1 1 0 0 0 -.883 -.993z" />
    </svg>
  )
);
ClockHour3Filled.displayName = "ClockHour3Filled";
export const ClockHour3FilledMetadata = { id: "clock-hour-3_filled", baseId: "clock-hour-3", variant: "filled", name: "Clock Hour 3", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ClockHour3Filled;
