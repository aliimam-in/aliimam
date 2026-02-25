/**
 * Auto-generated logo component: Vector Triangle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorTriangleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VectorTriangleOffOutlineLogo = React.forwardRef<SVGSVGElement, VectorTriangleOffOutlineLogoProps>(
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
      <path d="M10 6v-1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1" />
  <path d="M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M20.705 20.709a1 1 0 0 1 -.705 .291h-2a1 1 0 0 1 -1 -1v-2c0 -.28 .115 -.532 .3 -.714" />
  <path d="M6.5 17.1l3.749 -6.823" />
  <path d="M13.158 9.197l-.658 -1.197" />
  <path d="M7 19h10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

VectorTriangleOffOutlineLogo.displayName = "VectorTriangleOffOutlineLogo";

export const VectorTriangleOffOutlineLogoMetadata = {
  id: "vector-triangle-off-outline",
  baseId: "vector-triangle-off-outline",
  variant: "default",
  name: "Vector Triangle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VectorTriangleOffOutlineLogo;
