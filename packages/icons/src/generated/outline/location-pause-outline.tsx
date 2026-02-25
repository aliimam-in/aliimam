/**
 * Auto-generated logo component: Location Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationPauseOutlineLogo = React.forwardRef<SVGSVGElement, LocationPauseOutlineLogoProps>(
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
      <path d="M13.02 20.04l-3.02 -6.04l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.634 10.062" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

LocationPauseOutlineLogo.displayName = "LocationPauseOutlineLogo";

export const LocationPauseOutlineLogoMetadata = {
  id: "location-pause-outline",
  baseId: "location-pause-outline",
  variant: "default",
  name: "Location Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationPauseOutlineLogo;
