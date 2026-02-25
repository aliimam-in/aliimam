/**
 * Auto-generated logo component: Geometry Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GeometryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GeometryOutlineLogo = React.forwardRef<SVGSVGElement, GeometryOutlineLogoProps>(
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
      <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
  <path d="M10 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
  <path d="M12 5v-2" />
    </svg>
  )
);

GeometryOutlineLogo.displayName = "GeometryOutlineLogo";

export const GeometryOutlineLogoMetadata = {
  id: "geometry-outline",
  baseId: "geometry-outline",
  variant: "default",
  name: "Geometry Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GeometryOutlineLogo;
