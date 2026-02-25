/**
 * Auto-generated logo component: Cheese Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheeseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheeseOutlineLogo = React.forwardRef<SVGSVGElement, CheeseOutlineLogoProps>(
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
      <path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" />
  <path d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" />
  <path d="M15 13v.01" />
  <path d="M8 13v.01" />
  <path d="M11 16v.01" />
    </svg>
  )
);

CheeseOutlineLogo.displayName = "CheeseOutlineLogo";

export const CheeseOutlineLogoMetadata = {
  id: "cheese-outline",
  baseId: "cheese-outline",
  variant: "default",
  name: "Cheese Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheeseOutlineLogo;
