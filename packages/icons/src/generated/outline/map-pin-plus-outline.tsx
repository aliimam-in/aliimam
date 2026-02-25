/**
 * Auto-generated logo component: Map Pin Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinPlusOutlineLogo = React.forwardRef<SVGSVGElement, MapPinPlusOutlineLogoProps>(
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
  <path d="M12.794 21.322a2 2 0 0 1 -2.207 -.422l-4.244 -4.243a8 8 0 1 1 13.59 -4.616" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

MapPinPlusOutlineLogo.displayName = "MapPinPlusOutlineLogo";

export const MapPinPlusOutlineLogoMetadata = {
  id: "map-pin-plus-outline",
  baseId: "map-pin-plus-outline",
  variant: "default",
  name: "Map Pin Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinPlusOutlineLogo;
