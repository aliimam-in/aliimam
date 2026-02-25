/**
 * Auto-generated logo component: Square Number 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareNumber4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareNumber4OutlineLogo = React.forwardRef<SVGSVGElement, SquareNumber4OutlineLogoProps>(
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
  <path d="M10 8v3a1 1 0 0 0 1 1h3" />
  <path d="M14 8v8" />
    </svg>
  )
);

SquareNumber4OutlineLogo.displayName = "SquareNumber4OutlineLogo";

export const SquareNumber4OutlineLogoMetadata = {
  id: "square-number-4-outline",
  baseId: "square-number-4-outline",
  variant: "default",
  name: "Square Number 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareNumber4OutlineLogo;
