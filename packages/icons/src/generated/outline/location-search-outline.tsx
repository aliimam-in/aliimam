/**
 * Auto-generated logo component: Location Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationSearchOutlineLogo = React.forwardRef<SVGSVGElement, LocationSearchOutlineLogoProps>(
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
      <path d="M11 16l-1 -2l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-2.916 8.076" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

LocationSearchOutlineLogo.displayName = "LocationSearchOutlineLogo";

export const LocationSearchOutlineLogoMetadata = {
  id: "location-search-outline",
  baseId: "location-search-outline",
  variant: "default",
  name: "Location Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationSearchOutlineLogo;
