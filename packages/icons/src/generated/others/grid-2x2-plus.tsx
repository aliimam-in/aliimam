/**
 * Auto-generated logo component: Grid 2x2 Plus (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Grid2x2PlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Grid2x2PlusLogo = React.forwardRef<SVGSVGElement, Grid2x2PlusLogoProps>(
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
  <path d="M16 19h6" />
  <path d="M19 22v-6" />
    </svg>
  )
);

Grid2x2PlusLogo.displayName = "Grid2x2PlusLogo";

export const Grid2x2PlusLogoMetadata = {
  id: "grid-2x2-plus",
  baseId: "grid-2x2-plus",
  variant: "default",
  name: "Grid 2x2 Plus",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Grid2x2PlusLogo;
