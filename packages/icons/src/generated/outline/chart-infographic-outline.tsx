/**
 * Auto-generated logo component: Chart Infographic Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartInfographicOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartInfographicOutlineLogo = React.forwardRef<SVGSVGElement, ChartInfographicOutlineLogoProps>(
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
      <path d="M3 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M7 3v4h4" />
  <path d="M9 17l0 4" />
  <path d="M17 14l0 7" />
  <path d="M13 13l0 8" />
  <path d="M21 12l0 9" />
    </svg>
  )
);

ChartInfographicOutlineLogo.displayName = "ChartInfographicOutlineLogo";

export const ChartInfographicOutlineLogoMetadata = {
  id: "chart-infographic-outline",
  baseId: "chart-infographic-outline",
  variant: "default",
  name: "Chart Infographic Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartInfographicOutlineLogo;
