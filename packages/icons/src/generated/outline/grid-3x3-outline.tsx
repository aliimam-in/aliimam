/**
 * Auto-generated logo component: Grid 3x3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid3x3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid3x3OutlineLogo = React.forwardRef<SVGSVGElement, Grid3x3OutlineLogoProps>(
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
      <path d="M3 8h18" />
  <path d="M3 16h18" />
  <path d="M8 3v18" />
  <path d="M16 3v18" />
    </svg>
  )
);

Grid3x3OutlineLogo.displayName = "Grid3x3OutlineLogo";

export const Grid3x3OutlineLogoMetadata = {
  id: "grid-3x3-outline",
  baseId: "grid-3x3-outline",
  variant: "default",
  name: "Grid 3x3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid3x3OutlineLogo;
