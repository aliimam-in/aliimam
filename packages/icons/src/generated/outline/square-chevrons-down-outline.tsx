/**
 * Auto-generated logo component: Square Chevrons Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronsDownOutlineLogo = React.forwardRef<SVGSVGElement, SquareChevronsDownOutlineLogoProps>(
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
      <path d="M15 8l-3 3l-3 -3" />
  <path d="M15 13l-3 3l-3 -3" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareChevronsDownOutlineLogo.displayName = "SquareChevronsDownOutlineLogo";

export const SquareChevronsDownOutlineLogoMetadata = {
  id: "square-chevrons-down-outline",
  baseId: "square-chevrons-down-outline",
  variant: "default",
  name: "Square Chevrons Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronsDownOutlineLogo;
