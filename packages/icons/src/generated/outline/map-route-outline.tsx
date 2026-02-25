/**
 * Auto-generated logo component: Map Route Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapRouteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapRouteOutlineLogo = React.forwardRef<SVGSVGElement, MapRouteOutlineLogoProps>(
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
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
  <path d="M9 12v.01" />
  <path d="M6 13v.01" />
  <path d="M17 15l-4 -4" />
  <path d="M13 15l4 -4" />
    </svg>
  )
);

MapRouteOutlineLogo.displayName = "MapRouteOutlineLogo";

export const MapRouteOutlineLogoMetadata = {
  id: "map-route-outline",
  baseId: "map-route-outline",
  variant: "default",
  name: "Map Route Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapRouteOutlineLogo;
