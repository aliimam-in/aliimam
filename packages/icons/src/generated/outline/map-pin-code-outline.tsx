/**
 * Auto-generated logo component: Map Pin Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinCodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinCodeOutlineLogo = React.forwardRef<SVGSVGElement, MapPinCodeOutlineLogoProps>(
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
  <path d="M11.85 21.48a1.992 1.992 0 0 1 -1.263 -.58l-4.244 -4.243a8 8 0 1 1 13.385 -3.585" />
  <path d="M20 21l2 -2l-2 -2" />
  <path d="M17 17l-2 2l2 2" />
    </svg>
  )
);

MapPinCodeOutlineLogo.displayName = "MapPinCodeOutlineLogo";

export const MapPinCodeOutlineLogoMetadata = {
  id: "map-pin-code-outline",
  baseId: "map-pin-code-outline",
  variant: "default",
  name: "Map Pin Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinCodeOutlineLogo;
