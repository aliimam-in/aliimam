/**
 * Auto-generated logo component: Triangle Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TrianglePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TrianglePlusOutlineLogo = React.forwardRef<SVGSVGElement, TrianglePlusOutlineLogoProps>(
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
  <path d="M12 10v6" />
    </svg>
  )
);

TrianglePlusOutlineLogo.displayName = "TrianglePlusOutlineLogo";

export const TrianglePlusOutlineLogoMetadata = {
  id: "triangle-plus-outline",
  baseId: "triangle-plus-outline",
  variant: "default",
  name: "Triangle Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TrianglePlusOutlineLogo;
