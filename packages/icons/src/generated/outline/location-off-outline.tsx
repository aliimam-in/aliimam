/**
 * Auto-generated logo component: Location Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationOffOutlineLogo = React.forwardRef<SVGSVGElement, LocationOffOutlineLogoProps>(
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
      <path d="M10.72 6.712l10.28 -3.712l-3.724 10.313m-1.056 2.925l-1.72 4.762a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l4.775 -1.724" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LocationOffOutlineLogo.displayName = "LocationOffOutlineLogo";

export const LocationOffOutlineLogoMetadata = {
  id: "location-off-outline",
  baseId: "location-off-outline",
  variant: "default",
  name: "Location Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationOffOutlineLogo;
