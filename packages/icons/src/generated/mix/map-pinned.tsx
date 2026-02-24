/**
 * Auto-generated logo component: Map Pinned (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapPinnedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapPinnedLogo = React.forwardRef<SVGSVGElement, MapPinnedLogoProps>(
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
      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
  <circle cx="12" cy="8" r="2" />
  <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
    </svg>
  )
);

MapPinnedLogo.displayName = "MapPinnedLogo";

export const MapPinnedLogoMetadata = {
  id: "map-pinned",
  baseId: "map-pinned",
  variant: "default",
  name: "Map Pinned",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapPinnedLogo;
