/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareChartGanttProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareChartGantt = React.forwardRef<SVGSVGElement, SquareChartGanttProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 8h7" />
  <path d="M8 12h6" />
  <path d="M11 16h5" />
    </svg>
  )
);
SquareChartGantt.displayName = "SquareChartGantt";
export const SquareChartGanttMetadata = { 
  id: "square-chart-gantt", 
  baseId: "square-chart-gantt", 
  variant: "default", 
  name: "Square Chart Gantt", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareChartGantt;
