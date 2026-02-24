/**
 * Auto-generated logo component: Map Pin Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinCheckLogo = React.forwardRef<SVGSVGElement, MapPinCheckLogoProps>(
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
      <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
  <circle cx="12" cy="10" r="3" />
  <path d="m16 18 2 2 4-4" />
    </svg>
  )
);

MapPinCheckLogo.displayName = "MapPinCheckLogo";

export const MapPinCheckLogoMetadata = {
  id: "map-pin-check",
  baseId: "map-pin-check",
  variant: "default",
  name: "Map Pin Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinCheckLogo;
