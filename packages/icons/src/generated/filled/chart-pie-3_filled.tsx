/**
 * Auto-generated logo component: Chart Pie 3 (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPie3FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPie3FilledLogo = React.forwardRef<SVGSVGElement, ChartPie3FilledLogoProps>(
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
      <path d="M17 20.66a10 10 0 0 1 -11.328 -.917l6.742 -6.743h9.536a10 10 0 0 1 -4.95 7.66m-6 -18.61v9.534l-6.743 6.744a10 10 0 0 1 -2.257 -6.328l.005 -.324a10 10 0 0 1 8.995 -9.626m6 1.29a10 10 0 0 1 4.95 7.66h-8.95v-8.95a10 10 0 0 1 4 1.29" />
    </svg>
  )
);

ChartPie3FilledLogo.displayName = "ChartPie3FilledLogo";

export const ChartPie3FilledLogoMetadata = {
  id: "chart-pie-3_filled",
  baseId: "chart-pie-3",
  variant: "filled",
  name: "Chart Pie 3",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPie3FilledLogo;
