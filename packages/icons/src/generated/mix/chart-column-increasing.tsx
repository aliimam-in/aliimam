/**
 * Auto-generated logo component: Chart Column Increasing (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartColumnIncreasingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartColumnIncreasingLogo = React.forwardRef<SVGSVGElement, ChartColumnIncreasingLogoProps>(
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
      <path d="M13 17V9" />
  <path d="M18 17V5" />
  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M8 17v-3" />
    </svg>
  )
);

ChartColumnIncreasingLogo.displayName = "ChartColumnIncreasingLogo";

export const ChartColumnIncreasingLogoMetadata = {
  id: "chart-column-increasing",
  baseId: "chart-column-increasing",
  variant: "default",
  name: "Chart Column Increasing",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartColumnIncreasingLogo;
