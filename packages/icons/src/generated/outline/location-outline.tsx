/**
 * Auto-generated logo component: Location Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationOutlineLogo = React.forwardRef<SVGSVGElement, LocationOutlineLogoProps>(
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
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  )
);

LocationOutlineLogo.displayName = "LocationOutlineLogo";

export const LocationOutlineLogoMetadata = {
  id: "location-outline",
  baseId: "location-outline",
  variant: "default",
  name: "Location Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationOutlineLogo;
