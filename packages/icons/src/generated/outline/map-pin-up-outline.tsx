/**
 * Auto-generated logo component: Map Pin Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinUpOutlineLogo = React.forwardRef<SVGSVGElement, MapPinUpOutlineLogoProps>(
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
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M12.789 21.324a2 2 0 0 1 -2.202 -.424l-4.244 -4.243a8 8 0 1 1 13.59 -4.626" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

MapPinUpOutlineLogo.displayName = "MapPinUpOutlineLogo";

export const MapPinUpOutlineLogoMetadata = {
  id: "map-pin-up-outline",
  baseId: "map-pin-up-outline",
  variant: "default",
  name: "Map Pin Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinUpOutlineLogo;
