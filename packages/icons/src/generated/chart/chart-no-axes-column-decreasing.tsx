/**
 * Auto-generated logo component: Chart No Axes Column Decreasing (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartNoAxesColumnDecreasingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartNoAxesColumnDecreasingLogo = React.forwardRef<SVGSVGElement, ChartNoAxesColumnDecreasingLogoProps>(
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
      <path d="M5 21V3" />
  <path d="M12 21V9" />
  <path d="M19 21v-6" />
    </svg>
  )
);

ChartNoAxesColumnDecreasingLogo.displayName = "ChartNoAxesColumnDecreasingLogo";

export const ChartNoAxesColumnDecreasingLogoMetadata = {
  id: "chart-no-axes-column-decreasing",
  baseId: "chart-no-axes-column-decreasing",
  variant: "default",
  name: "Chart No Axes Column Decreasing",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartNoAxesColumnDecreasingLogo;
