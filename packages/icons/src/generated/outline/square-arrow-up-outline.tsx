/**
 * Auto-generated logo component: Square Arrow Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowUpOutlineLogo = React.forwardRef<SVGSVGElement, SquareArrowUpOutlineLogoProps>(
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
      <path d="M16 12l-4 -4l-4 4" />
  <path d="M12 16v-8" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareArrowUpOutlineLogo.displayName = "SquareArrowUpOutlineLogo";

export const SquareArrowUpOutlineLogoMetadata = {
  id: "square-arrow-up-outline",
  baseId: "square-arrow-up-outline",
  variant: "default",
  name: "Square Arrow Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowUpOutlineLogo;
