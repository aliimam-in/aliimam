/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ClockHour8FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ClockHour8Filled = React.forwardRef<SVGSVGElement, ClockHour8FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66a1 1 0 0 0 -1 1v4.464l-2.555 1.704a1 1 0 0 0 -.336 1.286l.059 .1a1 1 0 0 0 1.387 .278l3.027 -2.018l.087 -.07l.074 -.075l.075 -.094l.052 -.08l.035 -.07l.051 -.132l.031 -.135l.01 -.082l.003 -.076v-5a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
ClockHour8Filled.displayName = "ClockHour8Filled";
export const ClockHour8FilledMetadata = { id: "clock-hour-8_filled", baseId: "clock-hour-8", variant: "filled", name: "Clock Hour 8", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ClockHour8Filled;
