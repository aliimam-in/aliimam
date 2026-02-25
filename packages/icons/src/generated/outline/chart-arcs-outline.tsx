/**
 * Auto-generated logo component: Chart Arcs Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartArcsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartArcsOutlineLogo = React.forwardRef<SVGSVGElement, ChartArcsOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
  <path d="M3 12a9 9 0 1 0 9 -9" />
    </svg>
  )
);

ChartArcsOutlineLogo.displayName = "ChartArcsOutlineLogo";

export const ChartArcsOutlineLogoMetadata = {
  id: "chart-arcs-outline",
  baseId: "chart-arcs-outline",
  variant: "default",
  name: "Chart Arcs Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartArcsOutlineLogo;
