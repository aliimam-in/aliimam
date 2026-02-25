/**
 * Auto-generated logo component: Square Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareCheckOutlineLogo = React.forwardRef<SVGSVGElement, SquareCheckOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M9 12l2 2l4 -4" />
    </svg>
  )
);

SquareCheckOutlineLogo.displayName = "SquareCheckOutlineLogo";

export const SquareCheckOutlineLogoMetadata = {
  id: "square-check-outline",
  baseId: "square-check-outline",
  variant: "default",
  name: "Square Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareCheckOutlineLogo;
