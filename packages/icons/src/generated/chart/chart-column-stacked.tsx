/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartColumnStackedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartColumnStacked = React.forwardRef<SVGSVGElement, ChartColumnStackedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M11 13H7" />
  <path d="M19 9h-4" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <rect x="15" y="5" width="4" height="12" rx="1" />
  <rect x="7" y="8" width="4" height="9" rx="1" />
    </svg>
  )
);
ChartColumnStacked.displayName = "ChartColumnStacked";
export const ChartColumnStackedMetadata = { id: "chart-column-stacked", baseId: "chart-column-stacked", variant: "default", name: "Chart Column Stacked", category: "chart", tags: [], viewBox: "0 0 24 24" } as const;
export default ChartColumnStacked;
