/**
 * Auto-generated logo component: Map (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapLogo = React.forwardRef<SVGSVGElement, MapLogoProps>(
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
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  )
);

MapLogo.displayName = "MapLogo";

export const MapLogoMetadata = {
  id: "map",
  baseId: "map",
  variant: "default",
  name: "Map",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapLogo;
