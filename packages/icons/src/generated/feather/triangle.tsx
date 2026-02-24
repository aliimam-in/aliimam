/**
 * Auto-generated logo component: Triangle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TriangleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TriangleLogo = React.forwardRef<SVGSVGElement, TriangleLogoProps>(
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
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    </svg>
  )
);

TriangleLogo.displayName = "TriangleLogo";

export const TriangleLogoMetadata = {
  id: "triangle",
  baseId: "triangle",
  variant: "default",
  name: "Triangle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TriangleLogo;
