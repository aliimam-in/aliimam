/**
 * Auto-generated logo component: Map Pins Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinsOutlineLogo = React.forwardRef<SVGSVGElement, MapPinsOutlineLogoProps>(
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
      <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" />
  <path d="M8 7l0 .01" />
  <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829" />
  <path d="M16 15l0 .01" />
    </svg>
  )
);

MapPinsOutlineLogo.displayName = "MapPinsOutlineLogo";

export const MapPinsOutlineLogoMetadata = {
  id: "map-pins-outline",
  baseId: "map-pins-outline",
  variant: "default",
  name: "Map Pins Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinsOutlineLogo;
