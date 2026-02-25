/**
 * Auto-generated logo component: Grid Dots Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridDotsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridDotsOutlineLogo = React.forwardRef<SVGSVGElement, GridDotsOutlineLogoProps>(
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
      <path d="M4 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

GridDotsOutlineLogo.displayName = "GridDotsOutlineLogo";

export const GridDotsOutlineLogoMetadata = {
  id: "grid-dots-outline",
  baseId: "grid-dots-outline",
  variant: "default",
  name: "Grid Dots Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridDotsOutlineLogo;
