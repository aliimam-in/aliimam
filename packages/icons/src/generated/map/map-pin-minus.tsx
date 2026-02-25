/**
 * Auto-generated logo component: Map Pin Minus (default)
 * Category: map
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinMinusLogo = React.forwardRef<SVGSVGElement, MapPinMinusLogoProps>(
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
      <path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
  <circle cx="12" cy="10" r="3" />
  <path d="M16 18h6" />
    </svg>
  )
);

MapPinMinusLogo.displayName = "MapPinMinusLogo";

export const MapPinMinusLogoMetadata = {
  id: "map-pin-minus",
  baseId: "map-pin-minus",
  variant: "default",
  name: "Map Pin Minus",
  category: "map",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinMinusLogo;
