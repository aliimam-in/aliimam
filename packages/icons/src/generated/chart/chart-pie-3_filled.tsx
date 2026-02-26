/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartPie3FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartPie3Filled = React.forwardRef<SVGSVGElement, ChartPie3FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 20.66a10 10 0 0 1 -11.328 -.917l6.742 -6.743h9.536a10 10 0 0 1 -4.95 7.66m-6 -18.61v9.534l-6.743 6.744a10 10 0 0 1 -2.257 -6.328l.005 -.324a10 10 0 0 1 8.995 -9.626m6 1.29a10 10 0 0 1 4.95 7.66h-8.95v-8.95a10 10 0 0 1 4 1.29" />
    </svg>
  )
);
ChartPie3Filled.displayName = "ChartPie3Filled";
export const ChartPie3FilledMetadata = { 
  id: "chart-pie-3_filled", 
  baseId: "chart-pie-3", 
  variant: "filled", 
  name: "Chart Pie 3", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartPie3Filled;
