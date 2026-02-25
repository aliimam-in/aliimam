/**
 * Auto-generated logo component: Chart No Axes Column (default)
 * Category: chart
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartNoAxesColumnLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartNoAxesColumnLogo = React.forwardRef<SVGSVGElement, ChartNoAxesColumnLogoProps>(
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
      <path d="M5 21v-6" />
  <path d="M12 21V3" />
  <path d="M19 21V9" />
    </svg>
  )
);

ChartNoAxesColumnLogo.displayName = "ChartNoAxesColumnLogo";

export const ChartNoAxesColumnLogoMetadata = {
  id: "chart-no-axes-column",
  baseId: "chart-no-axes-column",
  variant: "default",
  name: "Chart No Axes Column",
  category: "chart",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartNoAxesColumnLogo;
