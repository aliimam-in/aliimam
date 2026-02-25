/**
 * Auto-generated logo component: Map Pin Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinCancelOutlineLogo = React.forwardRef<SVGSVGElement, MapPinCancelOutlineLogoProps>(
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
  <path d="M12.463 21.431a1.999 1.999 0 0 1 -1.876 -.531l-4.244 -4.243a8 8 0 1 1 13.594 -4.655" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

MapPinCancelOutlineLogo.displayName = "MapPinCancelOutlineLogo";

export const MapPinCancelOutlineLogoMetadata = {
  id: "map-pin-cancel-outline",
  baseId: "map-pin-cancel-outline",
  variant: "default",
  name: "Map Pin Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinCancelOutlineLogo;
