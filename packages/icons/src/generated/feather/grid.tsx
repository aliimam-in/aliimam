/**
 * Auto-generated logo component: Grid (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GridLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GridLogo = React.forwardRef<SVGSVGElement, GridLogoProps>(
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
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )
);

GridLogo.displayName = "GridLogo";

export const GridLogoMetadata = {
  id: "grid",
  baseId: "grid",
  variant: "default",
  name: "Grid",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GridLogo;
