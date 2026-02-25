/**
 * Auto-generated logo component: Map Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPauseOutlineLogo = React.forwardRef<SVGSVGElement, MapPauseOutlineLogoProps>(
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
      <path d="M13 19l-4 -2l-6 3v-13l6 -3l6 3l6 -3v9" />
  <path d="M9 4v13" />
  <path d="M15 7v6.5" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

MapPauseOutlineLogo.displayName = "MapPauseOutlineLogo";

export const MapPauseOutlineLogoMetadata = {
  id: "map-pause-outline",
  baseId: "map-pause-outline",
  variant: "default",
  name: "Map Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPauseOutlineLogo;
