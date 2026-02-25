/**
 * Auto-generated logo component: Polygon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PolygonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PolygonOutlineLogo = React.forwardRef<SVGSVGElement, PolygonOutlineLogoProps>(
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
      <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6.5 9.5l3.5 -3" />
  <path d="M14 5.5l3 1.5" />
  <path d="M18.5 10l-2.5 7" />
  <path d="M13.5 17.5l-7 -5" />
    </svg>
  )
);

PolygonOutlineLogo.displayName = "PolygonOutlineLogo";

export const PolygonOutlineLogoMetadata = {
  id: "polygon-outline",
  baseId: "polygon-outline",
  variant: "default",
  name: "Polygon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PolygonOutlineLogo;
