/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartNoAxesGanttProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartNoAxesGantt = React.forwardRef<SVGSVGElement, ChartNoAxesGanttProps>(
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
      <path d="M6 5h12" />
  <path d="M4 12h10" />
  <path d="M12 19h8" />
    </svg>
  )
);
ChartNoAxesGantt.displayName = "ChartNoAxesGantt";
export const ChartNoAxesGanttMetadata = { 
  id: "chart-no-axes-gantt", 
  baseId: "chart-no-axes-gantt", 
  variant: "default", 
  name: "Chart No Axes Gantt", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartNoAxesGantt;
