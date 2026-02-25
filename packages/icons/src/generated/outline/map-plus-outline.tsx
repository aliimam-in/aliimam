/**
 * Auto-generated logo component: Map Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPlusOutlineLogo = React.forwardRef<SVGSVGElement, MapPlusOutlineLogoProps>(
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
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8.5" />
  <path d="M9 4v13" />
  <path d="M15 7v8" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

MapPlusOutlineLogo.displayName = "MapPlusOutlineLogo";

export const MapPlusOutlineLogoMetadata = {
  id: "map-plus-outline",
  baseId: "map-plus-outline",
  variant: "default",
  name: "Map Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPlusOutlineLogo;
