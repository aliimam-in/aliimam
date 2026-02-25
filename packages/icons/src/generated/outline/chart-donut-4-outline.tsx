/**
 * Auto-generated logo component: Chart Donut 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartDonut4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartDonut4OutlineLogo = React.forwardRef<SVGSVGElement, ChartDonut4OutlineLogoProps>(
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
      <path d="M8.848 14.667l-3.348 2.833" />
  <path d="M12 3v5m4 4h5" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M14.219 15.328l2.781 4.172" />
  <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    </svg>
  )
);

ChartDonut4OutlineLogo.displayName = "ChartDonut4OutlineLogo";

export const ChartDonut4OutlineLogoMetadata = {
  id: "chart-donut-4-outline",
  baseId: "chart-donut-4-outline",
  variant: "default",
  name: "Chart Donut 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartDonut4OutlineLogo;
