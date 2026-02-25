/**
 * Auto-generated logo component: Chart Pie 4 Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPie4FilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPie4FilledLogo = React.forwardRef<SVGSVGElement, ChartPie4FilledLogoProps>(
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
      <path d="M11.844 13.57l4.843 7.264a10 10 0 0 1 -11.015 -1.09zm6.507 6.154l-4.481 -6.724h8.081a10 10 0 0 1 -3.348 6.511zm-7.35 -17.674v9.534l-6.744 6.744a10 10 0 0 1 -2.257 -6.328l.005 -.324a10 10 0 0 1 8.995 -9.626m6 1.29a10 10 0 0 1 4.95 7.66h-8.95v-8.95a10 10 0 0 1 4 1.29" />
    </svg>
  )
);

ChartPie4FilledLogo.displayName = "ChartPie4FilledLogo";

export const ChartPie4FilledLogoMetadata = {
  id: "chart-pie-4-filled",
  baseId: "chart-pie-4-filled",
  variant: "default",
  name: "Chart Pie 4 Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPie4FilledLogo;
