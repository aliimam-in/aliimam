/**
 * Auto-generated logo component: Map Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapCodeOutlineLogo = React.forwardRef<SVGSVGElement, MapCodeOutlineLogoProps>(
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
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
  <path d="M9 4v13" />
  <path d="M15 7v6.5" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

MapCodeOutlineLogo.displayName = "MapCodeOutlineLogo";

export const MapCodeOutlineLogoMetadata = {
  id: "map-code-outline",
  baseId: "map-code-outline",
  variant: "default",
  name: "Map Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapCodeOutlineLogo;
