/**
 * Auto-generated logo component: Chart Gantt (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartGanttLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartGanttLogo = React.forwardRef<SVGSVGElement, ChartGanttLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10 6h8" />
  <path d="M12 16h6" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M8 11h7" />
    </svg>
  )
);

ChartGanttLogo.displayName = "ChartGanttLogo";

export const ChartGanttLogoMetadata = {
  id: "chart-gantt",
  baseId: "chart-gantt",
  variant: "default",
  name: "Chart Gantt",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartGanttLogo;
