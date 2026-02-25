/**
 * Auto-generated logo component: Map Pin (default)
 * Category: map
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <circle cx="12" cy="10" r="3" />
    </svg>
  )
);

MapPinLogo.displayName = "MapPinLogo";

export const MapPinLogoMetadata = {
  id: "map-pin",
  baseId: "map-pin",
  variant: "default",
  name: "Map Pin",
  category: "map",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinLogo;
