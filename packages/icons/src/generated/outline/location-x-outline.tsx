/**
 * Auto-generated logo component: Location X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationXOutlineLogo = React.forwardRef<SVGSVGElement, LocationXOutlineLogoProps>(
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
      <path d="M13.5 21l-.224 -.448l-3.276 -6.552l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.622 10.03" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

LocationXOutlineLogo.displayName = "LocationXOutlineLogo";

export const LocationXOutlineLogoMetadata = {
  id: "location-x-outline",
  baseId: "location-x-outline",
  variant: "default",
  name: "Location X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationXOutlineLogo;
