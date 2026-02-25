/**
 * Auto-generated logo component: Grid Pattern Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridPatternOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridPatternOutlineLogo = React.forwardRef<SVGSVGElement, GridPatternOutlineLogoProps>(
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
      <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
  <path d="M10 8v8" />
  <path d="M14 8v8" />
  <path d="M8 10h8" />
  <path d="M8 14h8" />
    </svg>
  )
);

GridPatternOutlineLogo.displayName = "GridPatternOutlineLogo";

export const GridPatternOutlineLogoMetadata = {
  id: "grid-pattern-outline",
  baseId: "grid-pattern-outline",
  variant: "default",
  name: "Grid Pattern Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridPatternOutlineLogo;
