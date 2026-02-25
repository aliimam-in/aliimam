/**
 * Auto-generated logo component: Triangle Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleMinusOutlineLogo = React.forwardRef<SVGSVGElement, TriangleMinusOutlineLogoProps>(
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
      <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0v.001" />
  <path d="M9 13h6" />
    </svg>
  )
);

TriangleMinusOutlineLogo.displayName = "TriangleMinusOutlineLogo";

export const TriangleMinusOutlineLogoMetadata = {
  id: "triangle-minus-outline",
  baseId: "triangle-minus-outline",
  variant: "default",
  name: "Triangle Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleMinusOutlineLogo;
