/**
 * Auto-generated logo component: Wall Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WallOutlineLogo = React.forwardRef<SVGSVGElement, WallOutlineLogoProps>(
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
  <path d="M4 8h16" />
  <path d="M20 12h-16" />
  <path d="M4 16h16" />
  <path d="M9 4v4" />
  <path d="M14 8v4" />
  <path d="M8 12v4" />
  <path d="M16 12v4" />
  <path d="M11 16v4" />
    </svg>
  )
);

WallOutlineLogo.displayName = "WallOutlineLogo";

export const WallOutlineLogoMetadata = {
  id: "wall-outline",
  baseId: "wall-outline",
  variant: "default",
  name: "Wall Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WallOutlineLogo;
