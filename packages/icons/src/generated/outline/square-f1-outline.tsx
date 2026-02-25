/**
 * Auto-generated logo component: Square F1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareF1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareF1OutlineLogo = React.forwardRef<SVGSVGElement, SquareF1OutlineLogoProps>(
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
  <path d="M13 11l2 -2v6" />
  <path d="M8 12h2" />
  <path d="M10 9h-2v6" />
    </svg>
  )
);

SquareF1OutlineLogo.displayName = "SquareF1OutlineLogo";

export const SquareF1OutlineLogoMetadata = {
  id: "square-f1-outline",
  baseId: "square-f1-outline",
  variant: "default",
  name: "Square F1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareF1OutlineLogo;
