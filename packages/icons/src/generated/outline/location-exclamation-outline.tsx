/**
 * Auto-generated logo component: Location Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LocationExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LocationExclamationOutlineLogo = React.forwardRef<SVGSVGElement, LocationExclamationOutlineLogoProps>(
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
      <path d="M15.024 19.55l-.524 1.45a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.317 9.186" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

LocationExclamationOutlineLogo.displayName = "LocationExclamationOutlineLogo";

export const LocationExclamationOutlineLogoMetadata = {
  id: "location-exclamation-outline",
  baseId: "location-exclamation-outline",
  variant: "default",
  name: "Location Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LocationExclamationOutlineLogo;
