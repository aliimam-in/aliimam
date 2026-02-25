/**
 * Auto-generated logo component: Chart Histogram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartHistogramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartHistogramOutlineLogo = React.forwardRef<SVGSVGElement, ChartHistogramOutlineLogoProps>(
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
  <path d="M20 18v3" />
  <path d="M16 16v5" />
  <path d="M12 13v8" />
  <path d="M8 16v5" />
  <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
    </svg>
  )
);

ChartHistogramOutlineLogo.displayName = "ChartHistogramOutlineLogo";

export const ChartHistogramOutlineLogoMetadata = {
  id: "chart-histogram-outline",
  baseId: "chart-histogram-outline",
  variant: "default",
  name: "Chart Histogram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartHistogramOutlineLogo;
