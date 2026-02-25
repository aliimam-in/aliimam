/**
 * Auto-generated logo component: Map Pin Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinBoltOutlineLogo = React.forwardRef<SVGSVGElement, MapPinBoltOutlineLogoProps>(
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
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M13.414 20.9a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.591 -4.629" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

MapPinBoltOutlineLogo.displayName = "MapPinBoltOutlineLogo";

export const MapPinBoltOutlineLogoMetadata = {
  id: "map-pin-bolt-outline",
  baseId: "map-pin-bolt-outline",
  variant: "default",
  name: "Map Pin Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinBoltOutlineLogo;
