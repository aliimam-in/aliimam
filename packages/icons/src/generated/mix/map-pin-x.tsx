/**
 * Auto-generated logo component: Map Pin X (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinXLogo = React.forwardRef<SVGSVGElement, MapPinXLogoProps>(
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
      <path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" />
  <circle cx="12" cy="10" r="3" />
  <path d="m21.5 15.5-5 5" />
  <path d="m21.5 20.5-5-5" />
    </svg>
  )
);

MapPinXLogo.displayName = "MapPinXLogo";

export const MapPinXLogoMetadata = {
  id: "map-pin-x",
  baseId: "map-pin-x",
  variant: "default",
  name: "Map Pin X",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinXLogo;
