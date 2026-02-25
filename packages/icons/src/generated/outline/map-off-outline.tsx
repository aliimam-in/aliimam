/**
 * Auto-generated logo component: Map Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapOffOutlineLogo = React.forwardRef<SVGSVGElement, MapOffOutlineLogoProps>(
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
      <path d="M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" />
  <path d="M9 4v1m0 4v8" />
  <path d="M15 7v4m0 4v5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MapOffOutlineLogo.displayName = "MapOffOutlineLogo";

export const MapOffOutlineLogoMetadata = {
  id: "map-off-outline",
  baseId: "map-off-outline",
  variant: "default",
  name: "Map Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapOffOutlineLogo;
