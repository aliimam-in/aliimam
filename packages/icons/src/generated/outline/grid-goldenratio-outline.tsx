/**
 * Auto-generated logo component: Grid Goldenratio Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridGoldenratioOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridGoldenratioOutlineLogo = React.forwardRef<SVGSVGElement, GridGoldenratioOutlineLogoProps>(
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
      <path d="M3 10h18" />
  <path d="M3 14h18" />
  <path d="M10 3v18" />
  <path d="M14 3v18" />
    </svg>
  )
);

GridGoldenratioOutlineLogo.displayName = "GridGoldenratioOutlineLogo";

export const GridGoldenratioOutlineLogoMetadata = {
  id: "grid-goldenratio-outline",
  baseId: "grid-goldenratio-outline",
  variant: "default",
  name: "Grid Goldenratio Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridGoldenratioOutlineLogo;
