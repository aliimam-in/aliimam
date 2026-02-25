/**
 * Auto-generated logo component: Rotate Rectangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateRectangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateRectangleOutlineLogo = React.forwardRef<SVGSVGElement, RotateRectangleOutlineLogoProps>(
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
      <path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988" />
  <path d="M7.05 11.038v-3.988" />
    </svg>
  )
);

RotateRectangleOutlineLogo.displayName = "RotateRectangleOutlineLogo";

export const RotateRectangleOutlineLogoMetadata = {
  id: "rotate-rectangle-outline",
  baseId: "rotate-rectangle-outline",
  variant: "default",
  name: "Rotate Rectangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateRectangleOutlineLogo;
