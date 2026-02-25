/**
 * Auto-generated logo component: Squares Intersect (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquaresIntersectLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquaresIntersectLogo = React.forwardRef<SVGSVGElement, SquaresIntersectLogoProps>(
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
      <path d="M10 22a2 2 0 0 1-2-2" />
  <path d="M14 2a2 2 0 0 1 2 2" />
  <path d="M16 22h-2" />
  <path d="M2 10V8" />
  <path d="M2 4a2 2 0 0 1 2-2" />
  <path d="M20 8a2 2 0 0 1 2 2" />
  <path d="M22 14v2" />
  <path d="M22 20a2 2 0 0 1-2 2" />
  <path d="M4 16a2 2 0 0 1-2-2" />
  <path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" />
  <path d="M8 2h2" />
    </svg>
  )
);

SquaresIntersectLogo.displayName = "SquaresIntersectLogo";

export const SquaresIntersectLogoMetadata = {
  id: "squares-intersect",
  baseId: "squares-intersect",
  variant: "default",
  name: "Squares Intersect",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquaresIntersectLogo;
