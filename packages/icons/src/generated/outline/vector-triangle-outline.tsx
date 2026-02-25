/**
 * Auto-generated logo component: Vector Triangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorTriangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VectorTriangleOutlineLogo = React.forwardRef<SVGSVGElement, VectorTriangleOutlineLogoProps>(
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
      <path d="M10 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M17 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M6.5 17.1l5 -9.1" />
  <path d="M17.5 17.1l-5 -9.1" />
  <path d="M7 19l10 0" />
    </svg>
  )
);

VectorTriangleOutlineLogo.displayName = "VectorTriangleOutlineLogo";

export const VectorTriangleOutlineLogoMetadata = {
  id: "vector-triangle-outline",
  baseId: "vector-triangle-outline",
  variant: "default",
  name: "Vector Triangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VectorTriangleOutlineLogo;
