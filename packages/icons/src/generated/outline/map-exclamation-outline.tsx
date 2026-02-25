/**
 * Auto-generated logo component: Map Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MapExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MapExclamationOutlineLogo = React.forwardRef<SVGSVGElement, MapExclamationOutlineLogoProps>(
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
      <path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5" />
  <path d="M9 4v13" />
  <path d="M15 7v13" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

MapExclamationOutlineLogo.displayName = "MapExclamationOutlineLogo";

export const MapExclamationOutlineLogoMetadata = {
  id: "map-exclamation-outline",
  baseId: "map-exclamation-outline",
  variant: "default",
  name: "Map Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MapExclamationOutlineLogo;
