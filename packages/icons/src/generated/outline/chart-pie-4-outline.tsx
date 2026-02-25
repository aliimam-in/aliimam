/**
 * Auto-generated logo component: Chart Pie 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPie4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPie4OutlineLogo = React.forwardRef<SVGSVGElement, ChartPie4OutlineLogoProps>(
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
  <path d="M12 12l5 7.5" />
    </svg>
  )
);

ChartPie4OutlineLogo.displayName = "ChartPie4OutlineLogo";

export const ChartPie4OutlineLogoMetadata = {
  id: "chart-pie-4-outline",
  baseId: "chart-pie-4-outline",
  variant: "default",
  name: "Chart Pie 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPie4OutlineLogo;
