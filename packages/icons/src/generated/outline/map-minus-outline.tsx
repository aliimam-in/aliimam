/**
 * Auto-generated logo component: Map Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapMinusOutlineLogo = React.forwardRef<SVGSVGElement, MapMinusOutlineLogoProps>(
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
      <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v11" />
  <path d="M9 4v13" />
  <path d="M15 7v8" />
  <path d="M16 19h6" />
    </svg>
  )
);

MapMinusOutlineLogo.displayName = "MapMinusOutlineLogo";

export const MapMinusOutlineLogoMetadata = {
  id: "map-minus-outline",
  baseId: "map-minus-outline",
  variant: "default",
  name: "Map Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapMinusOutlineLogo;
