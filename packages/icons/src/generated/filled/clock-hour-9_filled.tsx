/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour9FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour9Filled = React.forwardRef<SVGSVGElement, ClockHour9FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-4.883 9.653a1 1 0 0 0 .883 -.993v-5a1 1 0 0 0 -2 0v4h-2.5a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h3.5z" />
    </svg>
  )
);
ClockHour9Filled.displayName = "ClockHour9Filled";
export const ClockHour9FilledMetadata = { id: "clock-hour-9_filled", baseId: "clock-hour-9", variant: "filled", name: "Clock Hour 9", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ClockHour9Filled;
