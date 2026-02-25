/**
 * Auto-generated logo component: Chart Ppf Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartPpfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartPpfOutlineLogo = React.forwardRef<SVGSVGElement, ChartPpfOutlineLogoProps>(
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
      <path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
  <path d="M3 3v18h18" />
    </svg>
  )
);

ChartPpfOutlineLogo.displayName = "ChartPpfOutlineLogo";

export const ChartPpfOutlineLogoMetadata = {
  id: "chart-ppf-outline",
  baseId: "chart-ppf-outline",
  variant: "default",
  name: "Chart Ppf Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartPpfOutlineLogo;
