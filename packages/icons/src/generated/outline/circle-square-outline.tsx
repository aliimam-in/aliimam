/**
 * Auto-generated logo component: Circle Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleSquareOutlineLogo = React.forwardRef<SVGSVGElement, CircleSquareOutlineLogoProps>(
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
      <path d="M3 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
  <path d="M10 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7" />
    </svg>
  )
);

CircleSquareOutlineLogo.displayName = "CircleSquareOutlineLogo";

export const CircleSquareOutlineLogoMetadata = {
  id: "circle-square-outline",
  baseId: "circle-square-outline",
  variant: "default",
  name: "Circle Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleSquareOutlineLogo;
