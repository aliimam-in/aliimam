/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartBarDecreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartBarDecreasing = React.forwardRef<SVGSVGElement, ChartBarDecreasingProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M7 11h8" />
  <path d="M7 16h3" />
  <path d="M7 6h12" />
    </svg>
  )
);
ChartBarDecreasing.displayName = "ChartBarDecreasing";
export const ChartBarDecreasingMetadata = { id: "chart-bar-decreasing", baseId: "chart-bar-decreasing", variant: "default", name: "Chart Bar Decreasing", category: "chart", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartBarDecreasing;
