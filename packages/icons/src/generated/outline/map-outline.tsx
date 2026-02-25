/**
 * Auto-generated logo component: Map Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapOutlineLogo = React.forwardRef<SVGSVGElement, MapOutlineLogoProps>(
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
      <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
  <path d="M9 4v13" />
  <path d="M15 7v13" />
    </svg>
  )
);

MapOutlineLogo.displayName = "MapOutlineLogo";

export const MapOutlineLogoMetadata = {
  id: "map-outline",
  baseId: "map-outline",
  variant: "default",
  name: "Map Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapOutlineLogo;
