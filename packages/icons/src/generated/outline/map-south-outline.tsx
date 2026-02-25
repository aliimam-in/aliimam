/**
 * Auto-generated logo component: Map South Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapSouthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapSouthOutlineLogo = React.forwardRef<SVGSVGElement, MapSouthOutlineLogoProps>(
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
  <path d="M10 14.25c0 .414 .336 .75 .75 .75h2.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h2.25a.75 .75 0 0 1 .75 .75" />
    </svg>
  )
);

MapSouthOutlineLogo.displayName = "MapSouthOutlineLogo";

export const MapSouthOutlineLogoMetadata = {
  id: "map-south-outline",
  baseId: "map-south-outline",
  variant: "default",
  name: "Map South Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapSouthOutlineLogo;
