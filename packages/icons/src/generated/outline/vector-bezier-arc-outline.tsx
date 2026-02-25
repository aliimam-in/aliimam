/**
 * Auto-generated logo component: Vector Bezier Arc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VectorBezierArcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VectorBezierArcOutlineLogo = React.forwardRef<SVGSVGElement, VectorBezierArcOutlineLogoProps>(
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
      <path d="M3 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M17 11a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M10 4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M10 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2" />
  <path d="M19 10a5 5 0 0 0 -5 -5" />
  <path d="M5 14a5 5 0 0 0 5 5" />
  <path d="M5 10a5 5 0 0 1 5 -5" />
    </svg>
  )
);

VectorBezierArcOutlineLogo.displayName = "VectorBezierArcOutlineLogo";

export const VectorBezierArcOutlineLogoMetadata = {
  id: "vector-bezier-arc-outline",
  baseId: "vector-bezier-arc-outline",
  variant: "default",
  name: "Vector Bezier Arc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VectorBezierArcOutlineLogo;
