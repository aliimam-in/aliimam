/**
 * Auto-generated logo component: Chart Pie 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPie3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPie3OutlineLogo = React.forwardRef<SVGSVGElement, ChartPie3OutlineLogoProps>(
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
      <path d="M12 12l-6.5 5.5" />
  <path d="M12 3v9h9" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

ChartPie3OutlineLogo.displayName = "ChartPie3OutlineLogo";

export const ChartPie3OutlineLogoMetadata = {
  id: "chart-pie-3-outline",
  baseId: "chart-pie-3-outline",
  variant: "default",
  name: "Chart Pie 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPie3OutlineLogo;
