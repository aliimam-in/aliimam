/**
 * Auto-generated logo component: Triangle Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleMinus2OutlineLogo = React.forwardRef<SVGSVGElement, TriangleMinus2OutlineLogoProps>(
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
      <path d="M20.48 15.016l-6.843 -11.426a1.914 1.914 0 0 0 -3.274 0l-8.106 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107" />
  <path d="M16 19h6" />
    </svg>
  )
);

TriangleMinus2OutlineLogo.displayName = "TriangleMinus2OutlineLogo";

export const TriangleMinus2OutlineLogoMetadata = {
  id: "triangle-minus-2-outline",
  baseId: "triangle-minus-2-outline",
  variant: "default",
  name: "Triangle Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleMinus2OutlineLogo;
