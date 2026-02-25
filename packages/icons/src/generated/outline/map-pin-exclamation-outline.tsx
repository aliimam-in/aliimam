/**
 * Auto-generated logo component: Map Pin Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinExclamationOutlineLogo = React.forwardRef<SVGSVGElement, MapPinExclamationOutlineLogoProps>(
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
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M15.005 19.31l-1.591 1.59a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 13.592 -4.638" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

MapPinExclamationOutlineLogo.displayName = "MapPinExclamationOutlineLogo";

export const MapPinExclamationOutlineLogoMetadata = {
  id: "map-pin-exclamation-outline",
  baseId: "map-pin-exclamation-outline",
  variant: "default",
  name: "Map Pin Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinExclamationOutlineLogo;
