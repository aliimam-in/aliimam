/**
 * Auto-generated logo component: Map West Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapWestOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapWestOutlineLogo = React.forwardRef<SVGSVGElement, MapWestOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 9l1 6l2 -3.75l2 3.75l1 -6" />
    </svg>
  )
);

MapWestOutlineLogo.displayName = "MapWestOutlineLogo";

export const MapWestOutlineLogoMetadata = {
  id: "map-west-outline",
  baseId: "map-west-outline",
  variant: "default",
  name: "Map West Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapWestOutlineLogo;
