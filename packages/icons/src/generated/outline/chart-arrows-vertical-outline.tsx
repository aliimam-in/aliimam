/**
 * Auto-generated logo component: Chart Arrows Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartArrowsVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartArrowsVerticalOutlineLogo = React.forwardRef<SVGSVGElement, ChartArrowsVerticalOutlineLogoProps>(
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
      <path d="M18 21v-14" />
  <path d="M9 15l3 -3l3 3" />
  <path d="M15 10l3 -3l3 3" />
  <path d="M3 21l18 0" />
  <path d="M12 21l0 -9" />
  <path d="M3 6l3 -3l3 3" />
  <path d="M6 21v-18" />
    </svg>
  )
);

ChartArrowsVerticalOutlineLogo.displayName = "ChartArrowsVerticalOutlineLogo";

export const ChartArrowsVerticalOutlineLogoMetadata = {
  id: "chart-arrows-vertical-outline",
  baseId: "chart-arrows-vertical-outline",
  variant: "default",
  name: "Chart Arrows Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartArrowsVerticalOutlineLogo;
