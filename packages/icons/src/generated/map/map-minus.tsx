/**
 * Auto-generated logo component: Map Minus (default)
 * Category: map
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapMinusLogo = React.forwardRef<SVGSVGElement, MapMinusLogoProps>(
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
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" />
  <path d="M15 5.764V14" />
  <path d="M21 18h-6" />
  <path d="M9 3.236v15" />
    </svg>
  )
);

MapMinusLogo.displayName = "MapMinusLogo";

export const MapMinusLogoMetadata = {
  id: "map-minus",
  baseId: "map-minus",
  variant: "default",
  name: "Map Minus",
  category: "map",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapMinusLogo;
