/**
 * Auto-generated logo component: Map East Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapEastOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapEastOutlineLogo = React.forwardRef<SVGSVGElement, MapEastOutlineLogoProps>(
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
  <path d="M14 9h-4v6h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

MapEastOutlineLogo.displayName = "MapEastOutlineLogo";

export const MapEastOutlineLogoMetadata = {
  id: "map-east-outline",
  baseId: "map-east-outline",
  variant: "default",
  name: "Map East Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapEastOutlineLogo;
