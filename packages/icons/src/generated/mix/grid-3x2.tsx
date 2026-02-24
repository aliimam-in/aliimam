/**
 * Auto-generated logo component: Grid 3x2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid3x2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid3x2Logo = React.forwardRef<SVGSVGElement, Grid3x2LogoProps>(
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
      <path d="M15 3v18" />
  <path d="M3 12h18" />
  <path d="M9 3v18" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

Grid3x2Logo.displayName = "Grid3x2Logo";

export const Grid3x2LogoMetadata = {
  id: "grid-3x2",
  baseId: "grid-3x2",
  variant: "default",
  name: "Grid 3x2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid3x2Logo;
