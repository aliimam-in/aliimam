/**
 * Auto-generated logo component: Map Pin Pen (default)
 * Category: map
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinPenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinPenLogo = React.forwardRef<SVGSVGElement, MapPinPenLogoProps>(
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
      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" />
  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
  <circle cx="10" cy="10" r="3" />
    </svg>
  )
);

MapPinPenLogo.displayName = "MapPinPenLogo";

export const MapPinPenLogoMetadata = {
  id: "map-pin-pen",
  baseId: "map-pin-pen",
  variant: "default",
  name: "Map Pin Pen",
  category: "map",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinPenLogo;
