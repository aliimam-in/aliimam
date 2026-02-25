/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartNoAxesColumnIncreasingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartNoAxesColumnIncreasing = React.forwardRef<SVGSVGElement, ChartNoAxesColumnIncreasingProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 21v-6" />
  <path d="M12 21V9" />
  <path d="M19 21V3" />
    </svg>
  )
);
ChartNoAxesColumnIncreasing.displayName = "ChartNoAxesColumnIncreasing";
export const ChartNoAxesColumnIncreasingMetadata = { id: "chart-no-axes-column-increasing", baseId: "chart-no-axes-column-increasing", variant: "default", name: "Chart No Axes Column Increasing", category: "chart", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartNoAxesColumnIncreasing;
