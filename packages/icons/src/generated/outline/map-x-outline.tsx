/**
 * Auto-generated logo component: Map X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapXOutlineLogo = React.forwardRef<SVGSVGElement, MapXOutlineLogoProps>(
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
      <path d="M14 19.5l-5 -2.5l-6 3v-13l6 -3l6 3l6 -3v9" />
  <path d="M9 4v13" />
  <path d="M15 7v6.5" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

MapXOutlineLogo.displayName = "MapXOutlineLogo";

export const MapXOutlineLogoMetadata = {
  id: "map-x-outline",
  baseId: "map-x-outline",
  variant: "default",
  name: "Map X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapXOutlineLogo;
