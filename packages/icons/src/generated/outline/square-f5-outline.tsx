/**
 * Auto-generated logo component: Square F5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareF5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareF5OutlineLogo = React.forwardRef<SVGSVGElement, SquareF5OutlineLogoProps>(
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
  <path d="M13 14.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
  <path d="M8 12h2" />
  <path d="M10 9h-2v6" />
    </svg>
  )
);

SquareF5OutlineLogo.displayName = "SquareF5OutlineLogo";

export const SquareF5OutlineLogoMetadata = {
  id: "square-f5-outline",
  baseId: "square-f5-outline",
  variant: "default",
  name: "Square F5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareF5OutlineLogo;
