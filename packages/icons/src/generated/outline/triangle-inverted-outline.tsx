/**
 * Auto-generated logo component: Triangle Inverted Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleInvertedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleInvertedOutlineLogo = React.forwardRef<SVGSVGElement, TriangleInvertedOutlineLogoProps>(
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
      <path d="M10.363 20.405l-8.106 -13.534a1.914 1.914 0 0 1 1.636 -2.871h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1 -3.274 0" />
    </svg>
  )
);

TriangleInvertedOutlineLogo.displayName = "TriangleInvertedOutlineLogo";

export const TriangleInvertedOutlineLogoMetadata = {
  id: "triangle-inverted-outline",
  baseId: "triangle-inverted-outline",
  variant: "default",
  name: "Triangle Inverted Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleInvertedOutlineLogo;
