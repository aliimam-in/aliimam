/**
 * Auto-generated logo component: Chart Spline (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartSplineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartSplineLogo = React.forwardRef<SVGSVGElement, ChartSplineLogoProps>(
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
  <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
    </svg>
  )
);

ChartSplineLogo.displayName = "ChartSplineLogo";

export const ChartSplineLogoMetadata = {
  id: "chart-spline",
  baseId: "chart-spline",
  variant: "default",
  name: "Chart Spline",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartSplineLogo;
