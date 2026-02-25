/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleGaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleGauge = React.forwardRef<SVGSVGElement, CircleGaugeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
  <circle cx="12" cy="12" r="2" />
  <path d="M13.4 10.6 19 5" />
    </svg>
  )
);
CircleGauge.displayName = "CircleGauge";
export const CircleGaugeMetadata = { id: "circle-gauge", baseId: "circle-gauge", variant: "default", name: "Circle Gauge", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleGauge;
