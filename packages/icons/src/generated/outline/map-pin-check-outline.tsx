/**
 * Auto-generated logo component: Map Pin Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinCheckOutlineLogo = React.forwardRef<SVGSVGElement, MapPinCheckOutlineLogoProps>(
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
  <path d="M11.87 21.48a1.992 1.992 0 0 1 -1.283 -.58l-4.244 -4.243a8 8 0 1 1 13.355 -3.474" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

MapPinCheckOutlineLogo.displayName = "MapPinCheckOutlineLogo";

export const MapPinCheckOutlineLogoMetadata = {
  id: "map-pin-check-outline",
  baseId: "map-pin-check-outline",
  variant: "default",
  name: "Map Pin Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinCheckOutlineLogo;
