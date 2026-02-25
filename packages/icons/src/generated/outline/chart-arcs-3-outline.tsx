/**
 * Auto-generated logo component: Chart Arcs 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartArcs3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartArcs3OutlineLogo = React.forwardRef<SVGSVGElement, ChartArcs3OutlineLogoProps>(
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
  <path d="M7 12a5 5 0 1 0 5 -5" />
  <path d="M6.29 18.957a9 9 0 1 0 5.71 -15.957" />
    </svg>
  )
);

ChartArcs3OutlineLogo.displayName = "ChartArcs3OutlineLogo";

export const ChartArcs3OutlineLogoMetadata = {
  id: "chart-arcs-3-outline",
  baseId: "chart-arcs-3-outline",
  variant: "default",
  name: "Chart Arcs 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartArcs3OutlineLogo;
