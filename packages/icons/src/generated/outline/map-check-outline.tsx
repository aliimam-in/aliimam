/**
 * Auto-generated logo component: Map Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapCheckOutlineLogo = React.forwardRef<SVGSVGElement, MapCheckOutlineLogoProps>(
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
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
  <path d="M9 4v13" />
  <path d="M15 7v8" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

MapCheckOutlineLogo.displayName = "MapCheckOutlineLogo";

export const MapCheckOutlineLogoMetadata = {
  id: "map-check-outline",
  baseId: "map-check-outline",
  variant: "default",
  name: "Map Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapCheckOutlineLogo;
