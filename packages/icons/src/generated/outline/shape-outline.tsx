/**
 * Auto-generated logo component: Shape Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShapeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShapeOutlineLogo = React.forwardRef<SVGSVGElement, ShapeOutlineLogoProps>(
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
  <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 7l0 10" />
  <path d="M7 5l10 0" />
  <path d="M7 19l10 0" />
  <path d="M19 7l0 10" />
    </svg>
  )
);

ShapeOutlineLogo.displayName = "ShapeOutlineLogo";

export const ShapeOutlineLogoMetadata = {
  id: "shape-outline",
  baseId: "shape-outline",
  variant: "default",
  name: "Shape Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShapeOutlineLogo;
