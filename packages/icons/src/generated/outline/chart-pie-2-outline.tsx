/**
 * Auto-generated logo component: Chart Pie 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPie2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPie2OutlineLogo = React.forwardRef<SVGSVGElement, ChartPie2OutlineLogoProps>(
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
      <path d="M12 3v9h9" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

ChartPie2OutlineLogo.displayName = "ChartPie2OutlineLogo";

export const ChartPie2OutlineLogoMetadata = {
  id: "chart-pie-2-outline",
  baseId: "chart-pie-2-outline",
  variant: "default",
  name: "Chart Pie 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPie2OutlineLogo;
