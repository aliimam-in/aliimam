/**
 * Auto-generated logo component: Polygon Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PolygonOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PolygonOffOutlineLogo = React.forwardRef<SVGSVGElement, PolygonOffOutlineLogoProps>(
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
  <path d="M6.5 9.5l1.546 -1.311" />
  <path d="M14 5.5l3 1.5" />
  <path d="M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" />
  <path d="M13.5 17.5l-7 -5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PolygonOffOutlineLogo.displayName = "PolygonOffOutlineLogo";

export const PolygonOffOutlineLogoMetadata = {
  id: "polygon-off-outline",
  baseId: "polygon-off-outline",
  variant: "default",
  name: "Polygon Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PolygonOffOutlineLogo;
