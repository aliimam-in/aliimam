/**
 * Auto-generated logo component: Grid Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridScanOutlineLogo = React.forwardRef<SVGSVGElement, GridScanOutlineLogoProps>(
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
      <path d="M10 8v8" />
  <path d="M14 8v8" />
  <path d="M8 10h8" />
  <path d="M8 14h8" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  )
);

GridScanOutlineLogo.displayName = "GridScanOutlineLogo";

export const GridScanOutlineLogoMetadata = {
  id: "grid-scan-outline",
  baseId: "grid-scan-outline",
  variant: "default",
  name: "Grid Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridScanOutlineLogo;
