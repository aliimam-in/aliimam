/**
 * Auto-generated logo component: Square Arrow Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowDownOutlineLogo = React.forwardRef<SVGSVGElement, SquareArrowDownOutlineLogoProps>(
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
      <path d="M8 12l4 4l4 -4" />
  <path d="M12 8v8" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareArrowDownOutlineLogo.displayName = "SquareArrowDownOutlineLogo";

export const SquareArrowDownOutlineLogoMetadata = {
  id: "square-arrow-down-outline",
  baseId: "square-arrow-down-outline",
  variant: "default",
  name: "Square Arrow Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowDownOutlineLogo;
