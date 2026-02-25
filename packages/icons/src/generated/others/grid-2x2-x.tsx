/**
 * Auto-generated logo component: Grid 2x2 X (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid2x2XLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid2x2XLogo = React.forwardRef<SVGSVGElement, Grid2x2XLogoProps>(
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
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
  <path d="m16 16 5 5" />
  <path d="m16 21 5-5" />
    </svg>
  )
);

Grid2x2XLogo.displayName = "Grid2x2XLogo";

export const Grid2x2XLogoMetadata = {
  id: "grid-2x2-x",
  baseId: "grid-2x2-x",
  variant: "default",
  name: "Grid 2x2 X",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid2x2XLogo;
