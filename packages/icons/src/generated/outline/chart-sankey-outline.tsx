/**
 * Auto-generated logo component: Chart Sankey Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartSankeyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartSankeyOutlineLogo = React.forwardRef<SVGSVGElement, ChartSankeyOutlineLogoProps>(
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
  <path d="M3 6h18" />
  <path d="M3 8c10 0 8 9 18 9" />
    </svg>
  )
);

ChartSankeyOutlineLogo.displayName = "ChartSankeyOutlineLogo";

export const ChartSankeyOutlineLogoMetadata = {
  id: "chart-sankey-outline",
  baseId: "chart-sankey-outline",
  variant: "default",
  name: "Chart Sankey Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartSankeyOutlineLogo;
