/**
 * Auto-generated logo component: Square Arrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowRightOutlineLogo = React.forwardRef<SVGSVGElement, SquareArrowRightOutlineLogoProps>(
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
      <path d="M12 16l4 -4l-4 -4" />
  <path d="M8 12h8" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareArrowRightOutlineLogo.displayName = "SquareArrowRightOutlineLogo";

export const SquareArrowRightOutlineLogoMetadata = {
  id: "square-arrow-right-outline",
  baseId: "square-arrow-right-outline",
  variant: "default",
  name: "Square Arrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowRightOutlineLogo;
