/**
 * Auto-generated logo component: Location Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationCodeOutlineLogo = React.forwardRef<SVGSVGElement, LocationCodeOutlineLogoProps>(
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
      <path d="M11.505 17.01l-1.505 -3.01l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.677 10.184" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

LocationCodeOutlineLogo.displayName = "LocationCodeOutlineLogo";

export const LocationCodeOutlineLogoMetadata = {
  id: "location-code-outline",
  baseId: "location-code-outline",
  variant: "default",
  name: "Location Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationCodeOutlineLogo;
