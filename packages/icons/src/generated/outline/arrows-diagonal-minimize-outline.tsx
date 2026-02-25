/**
 * Auto-generated logo component: Arrows Diagonal Minimize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDiagonalMinimizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDiagonalMinimizeOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDiagonalMinimizeOutlineLogoProps>(
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
      <path d="M6 10h4v-4" />
  <path d="M4 4l6 6" />
  <path d="M18 14h-4v4" />
  <path d="M14 14l6 6" />
    </svg>
  )
);

ArrowsDiagonalMinimizeOutlineLogo.displayName = "ArrowsDiagonalMinimizeOutlineLogo";

export const ArrowsDiagonalMinimizeOutlineLogoMetadata = {
  id: "arrows-diagonal-minimize-outline",
  baseId: "arrows-diagonal-minimize-outline",
  variant: "default",
  name: "Arrows Diagonal Minimize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDiagonalMinimizeOutlineLogo;
