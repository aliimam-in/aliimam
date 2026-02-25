/**
 * Auto-generated logo component: Chart Covariate Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartCovariateOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartCovariateOutlineLogo = React.forwardRef<SVGSVGElement, ChartCovariateOutlineLogoProps>(
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
      <path d="M18 11h.009" />
  <path d="M14 15h.009" />
  <path d="M12 6h.009" />
  <path d="M8 10h.009" />
  <path d="M3 21l17 -17" />
  <path d="M3 3v18h18" />
    </svg>
  )
);

ChartCovariateOutlineLogo.displayName = "ChartCovariateOutlineLogo";

export const ChartCovariateOutlineLogoMetadata = {
  id: "chart-covariate-outline",
  baseId: "chart-covariate-outline",
  variant: "default",
  name: "Chart Covariate Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartCovariateOutlineLogo;
