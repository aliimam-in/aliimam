/**
 * Auto-generated logo component: Grid 3x3 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid3x3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid3x3Logo = React.forwardRef<SVGSVGElement, Grid3x3LogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M3 9h18" />
  <path d="M3 15h18" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  )
);

Grid3x3Logo.displayName = "Grid3x3Logo";

export const Grid3x3LogoMetadata = {
  id: "grid-3x3",
  baseId: "grid-3x3",
  variant: "default",
  name: "Grid 3x3",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid3x3Logo;
