/**
 * Auto-generated logo component: Location Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationDollarOutlineLogo = React.forwardRef<SVGSVGElement, LocationDollarOutlineLogoProps>(
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
      <path d="M13.08 20.162l-3.08 -6.162l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-2.55 7.063" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

LocationDollarOutlineLogo.displayName = "LocationDollarOutlineLogo";

export const LocationDollarOutlineLogoMetadata = {
  id: "location-dollar-outline",
  baseId: "location-dollar-outline",
  variant: "default",
  name: "Location Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationDollarOutlineLogo;
