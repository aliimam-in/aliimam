/**
 * Auto-generated logo component: Chart Arrows Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartArrowsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartArrowsOutlineLogo = React.forwardRef<SVGSVGElement, ChartArrowsOutlineLogoProps>(
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
      <path d="M3 18l14 0" />
  <path d="M9 9l3 3l-3 3" />
  <path d="M14 15l3 3l-3 3" />
  <path d="M3 3l0 18" />
  <path d="M3 12l9 0" />
  <path d="M18 3l3 3l-3 3" />
  <path d="M3 6l18 0" />
    </svg>
  )
);

ChartArrowsOutlineLogo.displayName = "ChartArrowsOutlineLogo";

export const ChartArrowsOutlineLogoMetadata = {
  id: "chart-arrows-outline",
  baseId: "chart-arrows-outline",
  variant: "default",
  name: "Chart Arrows Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartArrowsOutlineLogo;
