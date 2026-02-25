/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartPie2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartPie2Filled = React.forwardRef<SVGSVGElement, ChartPie2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 2.05v9.95a1 1 0 0 0 1 1h9.95a10 10 0 0 1 -19.95 -1l.005 -.324a10 10 0 0 1 8.995 -9.626m6 1.29a10 10 0 0 1 4.95 7.66h-8.95v-8.95a10 10 0 0 1 4 1.29" />
    </svg>
  )
);
ChartPie2Filled.displayName = "ChartPie2Filled";
export const ChartPie2FilledMetadata = { id: "chart-pie-2_filled", baseId: "chart-pie-2", variant: "filled", name: "Chart Pie 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartPie2Filled;
