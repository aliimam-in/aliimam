/**
 * Auto-generated logo component: Lasso Polygon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoPolygonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoPolygonOutlineLogo = React.forwardRef<SVGSVGElement, LassoPolygonOutlineLogoProps>(
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
      <path d="M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" />
  <path d="M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 17c0 1.42 .316 2.805 1 4" />
    </svg>
  )
);

LassoPolygonOutlineLogo.displayName = "LassoPolygonOutlineLogo";

export const LassoPolygonOutlineLogoMetadata = {
  id: "lasso-polygon-outline",
  baseId: "lasso-polygon-outline",
  variant: "default",
  name: "Lasso Polygon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoPolygonOutlineLogo;
