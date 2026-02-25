/**
 * Auto-generated logo component: Map Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinOutlineLogo = React.forwardRef<SVGSVGElement, MapPinOutlineLogoProps>(
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
  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
    </svg>
  )
);

MapPinOutlineLogo.displayName = "MapPinOutlineLogo";

export const MapPinOutlineLogoMetadata = {
  id: "map-pin-outline",
  baseId: "map-pin-outline",
  variant: "default",
  name: "Map Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinOutlineLogo;
