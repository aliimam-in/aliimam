/**
 * Auto-generated logo component: Chart Area Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartAreaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartAreaOutlineLogo = React.forwardRef<SVGSVGElement, ChartAreaOutlineLogoProps>(
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
      <path d="M4 19l16 0" />
  <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
    </svg>
  )
);

ChartAreaOutlineLogo.displayName = "ChartAreaOutlineLogo";

export const ChartAreaOutlineLogoMetadata = {
  id: "chart-area-outline",
  baseId: "chart-area-outline",
  variant: "default",
  name: "Chart Area Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartAreaOutlineLogo;
