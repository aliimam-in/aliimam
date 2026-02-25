/**
 * Auto-generated logo component: Arrows Diagonal 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDiagonal2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDiagonal2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDiagonal2OutlineLogoProps>(
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
      <path d="M16 20l4 0l0 -4" />
  <path d="M14 14l6 6" />
  <path d="M8 4l-4 0l0 4" />
  <path d="M4 4l6 6" />
    </svg>
  )
);

ArrowsDiagonal2OutlineLogo.displayName = "ArrowsDiagonal2OutlineLogo";

export const ArrowsDiagonal2OutlineLogoMetadata = {
  id: "arrows-diagonal-2-outline",
  baseId: "arrows-diagonal-2-outline",
  variant: "default",
  name: "Arrows Diagonal 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDiagonal2OutlineLogo;
