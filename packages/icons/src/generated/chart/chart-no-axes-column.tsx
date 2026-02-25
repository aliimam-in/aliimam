/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartNoAxesColumnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartNoAxesColumn = React.forwardRef<SVGSVGElement, ChartNoAxesColumnProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 21v-6" />
  <path d="M12 21V3" />
  <path d="M19 21V9" />
    </svg>
  )
);
ChartNoAxesColumn.displayName = "ChartNoAxesColumn";
export const ChartNoAxesColumnMetadata = { id: "chart-no-axes-column", baseId: "chart-no-axes-column", variant: "default", name: "Chart No Axes Column", category: "chart", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartNoAxesColumn;
