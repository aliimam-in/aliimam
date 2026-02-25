/**
 * Auto-generated logo component: Grid 4x4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid4x4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid4x4OutlineLogo = React.forwardRef<SVGSVGElement, Grid4x4OutlineLogoProps>(
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
      <path d="M3 6h18" />
  <path d="M3 12h18" />
  <path d="M3 18h18" />
  <path d="M6 3v18" />
  <path d="M12 3v18" />
  <path d="M18 3v18" />
    </svg>
  )
);

Grid4x4OutlineLogo.displayName = "Grid4x4OutlineLogo";

export const Grid4x4OutlineLogoMetadata = {
  id: "grid-4x4-outline",
  baseId: "grid-4x4-outline",
  variant: "default",
  name: "Grid 4x4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid4x4OutlineLogo;
