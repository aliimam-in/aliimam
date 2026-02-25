/**
 * Auto-generated logo component: Chart Treemap Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartTreemapOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartTreemapOutlineLogo = React.forwardRef<SVGSVGElement, ChartTreemapOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M12 4v16" />
  <path d="M4 15h8" />
  <path d="M12 12h8" />
  <path d="M16 12v8" />
  <path d="M16 16h4" />
    </svg>
  )
);

ChartTreemapOutlineLogo.displayName = "ChartTreemapOutlineLogo";

export const ChartTreemapOutlineLogoMetadata = {
  id: "chart-treemap-outline",
  baseId: "chart-treemap-outline",
  variant: "default",
  name: "Chart Treemap Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartTreemapOutlineLogo;
