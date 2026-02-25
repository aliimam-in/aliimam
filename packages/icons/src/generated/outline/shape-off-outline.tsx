/**
 * Auto-generated logo component: Shape Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShapeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShapeOffOutlineLogo = React.forwardRef<SVGSVGElement, ShapeOffOutlineLogoProps>(
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
      <path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" />
  <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17.574 17.598a2 2 0 0 0 2.826 2.83" />
  <path d="M5 7v10" />
  <path d="M9 5h8" />
  <path d="M7 19h10" />
  <path d="M19 7v8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ShapeOffOutlineLogo.displayName = "ShapeOffOutlineLogo";

export const ShapeOffOutlineLogoMetadata = {
  id: "shape-off-outline",
  baseId: "shape-off-outline",
  variant: "default",
  name: "Shape Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShapeOffOutlineLogo;
