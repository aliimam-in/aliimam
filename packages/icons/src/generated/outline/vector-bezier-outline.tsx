/**
 * Auto-generated logo component: Vector Bezier Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorBezierOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VectorBezierOutlineLogo = React.forwardRef<SVGSVGElement, VectorBezierOutlineLogoProps>(
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
      <path d="M3 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M17 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M10 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M10 8.5a6 6 0 0 0 -5 5.5" />
  <path d="M14 8.5a6 6 0 0 1 5 5.5" />
  <path d="M10 8l-6 0" />
  <path d="M20 8l-6 0" />
  <path d="M2 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M20 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

VectorBezierOutlineLogo.displayName = "VectorBezierOutlineLogo";

export const VectorBezierOutlineLogoMetadata = {
  id: "vector-bezier-outline",
  baseId: "vector-bezier-outline",
  variant: "default",
  name: "Vector Bezier Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VectorBezierOutlineLogo;
