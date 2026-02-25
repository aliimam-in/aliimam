/**
 * Auto-generated logo component: Chart Grid Dots Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChartGridDotsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChartGridDotsOutlineLogo = React.forwardRef<SVGSVGElement, ChartGridDotsOutlineLogoProps>(
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
      <path d="M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M8 18h8" />
  <path d="M18 20v1" />
  <path d="M18 3v1" />
  <path d="M6 20v1" />
  <path d="M6 10v-7" />
  <path d="M12 3v18" />
  <path d="M18 8v8" />
  <path d="M8 12h13" />
  <path d="M21 6h-1" />
  <path d="M16 6h-13" />
  <path d="M3 12h1" />
  <path d="M20 18h1" />
  <path d="M3 18h1" />
  <path d="M6 14v2" />
    </svg>
  )
);

ChartGridDotsOutlineLogo.displayName = "ChartGridDotsOutlineLogo";

export const ChartGridDotsOutlineLogoMetadata = {
  id: "chart-grid-dots-outline",
  baseId: "chart-grid-dots-outline",
  variant: "default",
  name: "Chart Grid Dots Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChartGridDotsOutlineLogo;
