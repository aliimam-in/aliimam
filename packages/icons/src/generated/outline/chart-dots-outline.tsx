/**
 * Auto-generated logo component: Chart Dots Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartDotsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartDotsOutlineLogo = React.forwardRef<SVGSVGElement, ChartDotsOutlineLogoProps>(
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
      <path d="M3 3v18h18" />
  <path d="M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10.16 10.62l2.34 2.88" />
  <path d="M15.088 13.328l2.837 -4.586" />
    </svg>
  )
);

ChartDotsOutlineLogo.displayName = "ChartDotsOutlineLogo";

export const ChartDotsOutlineLogoMetadata = {
  id: "chart-dots-outline",
  baseId: "chart-dots-outline",
  variant: "default",
  name: "Chart Dots Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartDotsOutlineLogo;
