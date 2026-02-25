/**
 * Auto-generated logo component: Square Rounded Chevrons Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronsDownOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronsDownOutlineLogoProps>(
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
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronsDownOutlineLogo.displayName = "SquareRoundedChevronsDownOutlineLogo";

export const SquareRoundedChevronsDownOutlineLogoMetadata = {
  id: "square-rounded-chevrons-down-outline",
  baseId: "square-rounded-chevrons-down-outline",
  variant: "default",
  name: "Square Rounded Chevrons Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronsDownOutlineLogo;
