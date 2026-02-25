/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePercent = React.forwardRef<SVGSVGElement, CirclePercentProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="M9 9h.01" />
  <path d="M15 15h.01" />
    </svg>
  )
);
CirclePercent.displayName = "CirclePercent";
export const CirclePercentMetadata = { id: "circle-percent", baseId: "circle-percent", variant: "default", name: "Circle Percent", category: "circle", tags: [], viewBox: "0 0 24 24" } as const;
export default CirclePercent;
