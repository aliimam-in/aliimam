/**
 * Auto-generated logo component: Square Chart Gantt (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChartGanttLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChartGanttLogo = React.forwardRef<SVGSVGElement, SquareChartGanttLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 8h7" />
  <path d="M8 12h6" />
  <path d="M11 16h5" />
    </svg>
  )
);

SquareChartGanttLogo.displayName = "SquareChartGanttLogo";

export const SquareChartGanttLogoMetadata = {
  id: "square-chart-gantt",
  baseId: "square-chart-gantt",
  variant: "default",
  name: "Square Chart Gantt",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChartGanttLogo;
