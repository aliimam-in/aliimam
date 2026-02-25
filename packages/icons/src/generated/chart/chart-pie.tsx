/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartPieProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartPie = React.forwardRef<SVGSVGElement, ChartPieProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    </svg>
  )
);
ChartPie.displayName = "ChartPie";
export const ChartPieMetadata = { 
  id: "chart-pie", 
  baseId: "chart-pie", 
  variant: "default", 
  name: "Chart Pie", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartPie;
