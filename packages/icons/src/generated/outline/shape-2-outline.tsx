/**
 * Auto-generated logo component: Shape 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Shape2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Shape2OutlineLogo = React.forwardRef<SVGSVGElement, Shape2OutlineLogoProps>(
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
      <path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M6.5 17.5l11 -11m-12.5 .5v10m14 -10v10" />
    </svg>
  )
);

Shape2OutlineLogo.displayName = "Shape2OutlineLogo";

export const Shape2OutlineLogoMetadata = {
  id: "shape-2-outline",
  baseId: "shape-2-outline",
  variant: "default",
  name: "Shape 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Shape2OutlineLogo;
