/**
 * Auto-generated logo component: Location Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationCheckOutlineLogo = React.forwardRef<SVGSVGElement, LocationCheckOutlineLogoProps>(
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
      <path d="M11.512 17.023l-1.512 -3.023l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-4.45 12.324" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

LocationCheckOutlineLogo.displayName = "LocationCheckOutlineLogo";

export const LocationCheckOutlineLogoMetadata = {
  id: "location-check-outline",
  baseId: "location-check-outline",
  variant: "default",
  name: "Location Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationCheckOutlineLogo;
