/**
 * Auto-generated logo component: Map Pin Minus Inside (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinMinusInsideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinMinusInsideLogo = React.forwardRef<SVGSVGElement, MapPinMinusInsideLogoProps>(
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
  <path d="M9 10h6" />
    </svg>
  )
);

MapPinMinusInsideLogo.displayName = "MapPinMinusInsideLogo";

export const MapPinMinusInsideLogoMetadata = {
  id: "map-pin-minus-inside",
  baseId: "map-pin-minus-inside",
  variant: "default",
  name: "Map Pin Minus Inside",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinMinusInsideLogo;
