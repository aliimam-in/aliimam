/**
 * Auto-generated logo component: Square Rotated Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRotatedOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRotatedOffOutlineLogo = React.forwardRef<SVGSVGElement, SquareRotatedOffOutlineLogoProps>(
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
      <path d="M16.964 16.952l-3.462 3.461c-.782 .783 -2.222 .783 -3 0l-6.911 -6.91c-.783 -.783 -.783 -2.223 0 -3l3.455 -3.456m2 -2l1.453 -1.452c.782 -.783 2.222 -.783 3 0l6.911 6.91c.783 .783 .783 2.223 0 3l-1.448 1.45" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SquareRotatedOffOutlineLogo.displayName = "SquareRotatedOffOutlineLogo";

export const SquareRotatedOffOutlineLogoMetadata = {
  id: "square-rotated-off-outline",
  baseId: "square-rotated-off-outline",
  variant: "default",
  name: "Square Rotated Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRotatedOffOutlineLogo;
