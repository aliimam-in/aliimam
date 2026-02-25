/**
 * Auto-generated logo component: Map Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapBoltOutlineLogo = React.forwardRef<SVGSVGElement, MapBoltOutlineLogoProps>(
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
      <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v8.5" />
  <path d="M9 4v13" />
  <path d="M15 7v7.5" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

MapBoltOutlineLogo.displayName = "MapBoltOutlineLogo";

export const MapBoltOutlineLogoMetadata = {
  id: "map-bolt-outline",
  baseId: "map-bolt-outline",
  variant: "default",
  name: "Map Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapBoltOutlineLogo;
