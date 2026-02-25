/**
 * Auto-generated logo component: Chart Donut 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartDonut3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartDonut3OutlineLogo = React.forwardRef<SVGSVGElement, ChartDonut3OutlineLogoProps>(
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
      <path d="M12 3v5m4 4h5" />
  <path d="M8.929 14.582l-3.429 2.918" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

ChartDonut3OutlineLogo.displayName = "ChartDonut3OutlineLogo";

export const ChartDonut3OutlineLogoMetadata = {
  id: "chart-donut-3-outline",
  baseId: "chart-donut-3-outline",
  variant: "default",
  name: "Chart Donut 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartDonut3OutlineLogo;
