/**
 * Auto-generated logo component: Map Pin Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinMinusOutlineLogo = React.forwardRef<SVGSVGElement, MapPinMinusOutlineLogoProps>(
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
  <path d="M12.758 21.337a2 2 0 0 1 -2.171 -.437l-4.244 -4.243a8 8 0 1 1 12.585 -1.652" />
  <path d="M16 19h6" />
    </svg>
  )
);

MapPinMinusOutlineLogo.displayName = "MapPinMinusOutlineLogo";

export const MapPinMinusOutlineLogoMetadata = {
  id: "map-pin-minus-outline",
  baseId: "map-pin-minus-outline",
  variant: "default",
  name: "Map Pin Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinMinusOutlineLogo;
