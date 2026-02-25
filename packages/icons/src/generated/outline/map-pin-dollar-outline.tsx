/**
 * Auto-generated logo component: Map Pin Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinDollarOutlineLogo = React.forwardRef<SVGSVGElement, MapPinDollarOutlineLogoProps>(
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
  <path d="M13.02 21.206a2 2 0 0 1 -2.433 -.306l-4.244 -4.243a8 8 0 1 1 13.607 -6.555" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

MapPinDollarOutlineLogo.displayName = "MapPinDollarOutlineLogo";

export const MapPinDollarOutlineLogoMetadata = {
  id: "map-pin-dollar-outline",
  baseId: "map-pin-dollar-outline",
  variant: "default",
  name: "Map Pin Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinDollarOutlineLogo;
