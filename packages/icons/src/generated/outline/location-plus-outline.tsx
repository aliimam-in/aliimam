/**
 * Auto-generated logo component: Location Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationPlusOutlineLogo = React.forwardRef<SVGSVGElement, LocationPlusOutlineLogoProps>(
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
      <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.361 9.308" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

LocationPlusOutlineLogo.displayName = "LocationPlusOutlineLogo";

export const LocationPlusOutlineLogoMetadata = {
  id: "location-plus-outline",
  baseId: "location-plus-outline",
  variant: "default",
  name: "Location Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationPlusOutlineLogo;
