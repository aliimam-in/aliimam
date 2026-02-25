/**
 * Auto-generated logo component: Triangle Square Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleSquareCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleSquareCircleOutlineLogo = React.forwardRef<SVGSVGElement, TriangleSquareCircleOutlineLogoProps>(
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
      <path d="M12 3l-4 7h8l-4 -7" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
    </svg>
  )
);

TriangleSquareCircleOutlineLogo.displayName = "TriangleSquareCircleOutlineLogo";

export const TriangleSquareCircleOutlineLogoMetadata = {
  id: "triangle-square-circle-outline",
  baseId: "triangle-square-circle-outline",
  variant: "default",
  name: "Triangle Square Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleSquareCircleOutlineLogo;
