/**
 * Auto-generated logo component: Map North Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapNorthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapNorthOutlineLogo = React.forwardRef<SVGSVGElement, MapNorthOutlineLogoProps>(
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
  <path d="M10 15v-6l4 6v-6" />
    </svg>
  )
);

MapNorthOutlineLogo.displayName = "MapNorthOutlineLogo";

export const MapNorthOutlineLogoMetadata = {
  id: "map-north-outline",
  baseId: "map-north-outline",
  variant: "default",
  name: "Map North Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapNorthOutlineLogo;
