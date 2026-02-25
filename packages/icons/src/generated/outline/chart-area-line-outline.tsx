/**
 * Auto-generated logo component: Chart Area Line Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartAreaLineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartAreaLineOutlineLogo = React.forwardRef<SVGSVGElement, ChartAreaLineOutlineLogoProps>(
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
      <path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
  <path d="M4 12l3 -4l4 2l5 -6l4 4" />
    </svg>
  )
);

ChartAreaLineOutlineLogo.displayName = "ChartAreaLineOutlineLogo";

export const ChartAreaLineOutlineLogoMetadata = {
  id: "chart-area-line-outline",
  baseId: "chart-area-line-outline",
  variant: "default",
  name: "Chart Area Line Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartAreaLineOutlineLogo;
