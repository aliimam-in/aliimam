/**
 * Auto-generated logo component: Chart Pie Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPieOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPieOffOutlineLogo = React.forwardRef<SVGSVGElement, ChartPieOffOutlineLogoProps>(
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
      <path d="M5.63 5.643a9 9 0 0 0 12.742 12.715m1.674 -2.29a9.03 9.03 0 0 0 .754 -2.068a1 1 0 0 0 -1 -1h-2.8m-4 0a2 2 0 0 1 -2 -2m0 -4v-3a.9 .9 0 0 0 -1 -.8a9 9 0 0 0 -2.057 .749" />
  <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ChartPieOffOutlineLogo.displayName = "ChartPieOffOutlineLogo";

export const ChartPieOffOutlineLogoMetadata = {
  id: "chart-pie-off-outline",
  baseId: "chart-pie-off-outline",
  variant: "default",
  name: "Chart Pie Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPieOffOutlineLogo;
