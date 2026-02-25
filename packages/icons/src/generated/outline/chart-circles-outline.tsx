/**
 * Auto-generated logo component: Chart Circles Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartCirclesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartCirclesOutlineLogo = React.forwardRef<SVGSVGElement, ChartCirclesOutlineLogoProps>(
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
      <path d="M4 9.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
  <path d="M9 14.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0 -11 0" />
    </svg>
  )
);

ChartCirclesOutlineLogo.displayName = "ChartCirclesOutlineLogo";

export const ChartCirclesOutlineLogoMetadata = {
  id: "chart-circles-outline",
  baseId: "chart-circles-outline",
  variant: "default",
  name: "Chart Circles Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartCirclesOutlineLogo;
