/**
 * Auto-generated logo component: Map Pin (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinLogo = React.forwardRef<SVGSVGElement, MapPinLogoProps>(
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
);

MapPinLogo.displayName = "MapPinLogo";

export const MapPinLogoMetadata = {
  id: "map-pin",
  baseId: "map-pin",
  variant: "default",
  name: "Map Pin",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinLogo;
