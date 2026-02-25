/**
 * Auto-generated logo component: Chart No Axes Gantt (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartNoAxesGanttLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartNoAxesGanttLogo = React.forwardRef<SVGSVGElement, ChartNoAxesGanttLogoProps>(
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
      <path d="M6 5h12" />
  <path d="M4 12h10" />
  <path d="M12 19h8" />
    </svg>
  )
);

ChartNoAxesGanttLogo.displayName = "ChartNoAxesGanttLogo";

export const ChartNoAxesGanttLogoMetadata = {
  id: "chart-no-axes-gantt",
  baseId: "chart-no-axes-gantt",
  variant: "default",
  name: "Chart No Axes Gantt",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartNoAxesGanttLogo;
