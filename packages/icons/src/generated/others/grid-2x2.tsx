/**
 * Auto-generated logo component: Grid 2x2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid2x2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid2x2Logo = React.forwardRef<SVGSVGElement, Grid2x2LogoProps>(
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
      <path d="M12 3v18" />
  <path d="M3 12h18" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

Grid2x2Logo.displayName = "Grid2x2Logo";

export const Grid2x2LogoMetadata = {
  id: "grid-2x2",
  baseId: "grid-2x2",
  variant: "default",
  name: "Grid 2x2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid2x2Logo;
