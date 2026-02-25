/**
 * Auto-generated logo component: Location Broken Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationBrokenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationBrokenOutlineLogo = React.forwardRef<SVGSVGElement, LocationBrokenOutlineLogoProps>(
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
      <path d="M12.896 19.792l-2.896 -5.792l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.487 9.657" />
  <path d="M21.5 21.5l-5 -5" />
  <path d="M16.5 21.5l5 -5" />
    </svg>
  )
);

LocationBrokenOutlineLogo.displayName = "LocationBrokenOutlineLogo";

export const LocationBrokenOutlineLogoMetadata = {
  id: "location-broken-outline",
  baseId: "location-broken-outline",
  variant: "default",
  name: "Location Broken Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationBrokenOutlineLogo;
