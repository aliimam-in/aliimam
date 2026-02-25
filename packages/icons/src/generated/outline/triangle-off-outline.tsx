/**
 * Auto-generated logo component: Triangle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleOffOutlineLogo = React.forwardRef<SVGSVGElement, TriangleOffOutlineLogoProps>(
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
      <path d="M7.825 7.83l-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871h16.107m1.998 -1.99a1.913 1.913 0 0 0 -.255 -.88l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0l-1.028 1.718" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TriangleOffOutlineLogo.displayName = "TriangleOffOutlineLogo";

export const TriangleOffOutlineLogoMetadata = {
  id: "triangle-off-outline",
  baseId: "triangle-off-outline",
  variant: "default",
  name: "Triangle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleOffOutlineLogo;
