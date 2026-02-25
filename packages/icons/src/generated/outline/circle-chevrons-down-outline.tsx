/**
 * Auto-generated logo component: Circle Chevrons Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronsDownOutlineLogo = React.forwardRef<SVGSVGElement, CircleChevronsDownOutlineLogoProps>(
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
      <path d="M15 9l-3 3l-3 -3" />
  <path d="M15 13l-3 3l-3 -3" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

CircleChevronsDownOutlineLogo.displayName = "CircleChevronsDownOutlineLogo";

export const CircleChevronsDownOutlineLogoMetadata = {
  id: "circle-chevrons-down-outline",
  baseId: "circle-chevrons-down-outline",
  variant: "default",
  name: "Circle Chevrons Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronsDownOutlineLogo;
