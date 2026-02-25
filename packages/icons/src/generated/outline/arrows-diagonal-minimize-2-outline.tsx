/**
 * Auto-generated logo component: Arrows Diagonal Minimize 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsDiagonalMinimize2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsDiagonalMinimize2OutlineLogo = React.forwardRef<SVGSVGElement, ArrowsDiagonalMinimize2OutlineLogoProps>(
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
      <path d="M18 10h-4v-4" />
  <path d="M20 4l-6 6" />
  <path d="M6 14h4v4" />
  <path d="M10 14l-6 6" />
    </svg>
  )
);

ArrowsDiagonalMinimize2OutlineLogo.displayName = "ArrowsDiagonalMinimize2OutlineLogo";

export const ArrowsDiagonalMinimize2OutlineLogoMetadata = {
  id: "arrows-diagonal-minimize-2-outline",
  baseId: "arrows-diagonal-minimize-2-outline",
  variant: "default",
  name: "Arrows Diagonal Minimize 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsDiagonalMinimize2OutlineLogo;
