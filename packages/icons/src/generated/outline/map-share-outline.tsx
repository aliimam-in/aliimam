/**
 * Auto-generated logo component: Map Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapShareOutlineLogo = React.forwardRef<SVGSVGElement, MapShareOutlineLogoProps>(
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
      <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
  <path d="M9 4v13" />
  <path d="M15 7v6.5" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

MapShareOutlineLogo.displayName = "MapShareOutlineLogo";

export const MapShareOutlineLogoMetadata = {
  id: "map-share-outline",
  baseId: "map-share-outline",
  variant: "default",
  name: "Map Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapShareOutlineLogo;
