/**
 * Auto-generated logo component: Square F4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareF4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareF4OutlineLogo = React.forwardRef<SVGSVGElement, SquareF4OutlineLogoProps>(
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
  <path d="M13 9v2a1 1 0 0 0 1 1h1" />
  <path d="M16 9v6" />
  <path d="M8 12h2" />
  <path d="M10 9h-2v6" />
    </svg>
  )
);

SquareF4OutlineLogo.displayName = "SquareF4OutlineLogo";

export const SquareF4OutlineLogoMetadata = {
  id: "square-f4-outline",
  baseId: "square-f4-outline",
  variant: "default",
  name: "Square F4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareF4OutlineLogo;
