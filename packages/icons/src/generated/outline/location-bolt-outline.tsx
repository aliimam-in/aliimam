/**
 * Auto-generated logo component: Location Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationBoltOutlineLogo = React.forwardRef<SVGSVGElement, LocationBoltOutlineLogoProps>(
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
      <path d="M13.05 20.1l-3.05 -6.1l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.312 9.173" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

LocationBoltOutlineLogo.displayName = "LocationBoltOutlineLogo";

export const LocationBoltOutlineLogoMetadata = {
  id: "location-bolt-outline",
  baseId: "location-bolt-outline",
  variant: "default",
  name: "Location Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationBoltOutlineLogo;
