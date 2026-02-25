/**
 * Auto-generated logo component: Square Number 7 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareNumber7OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareNumber7OutlineLogo = React.forwardRef<SVGSVGElement, SquareNumber7OutlineLogoProps>(
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
  <path d="M10 8h4l-2 8" />
    </svg>
  )
);

SquareNumber7OutlineLogo.displayName = "SquareNumber7OutlineLogo";

export const SquareNumber7OutlineLogoMetadata = {
  id: "square-number-7-outline",
  baseId: "square-number-7-outline",
  variant: "default",
  name: "Square Number 7 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareNumber7OutlineLogo;
