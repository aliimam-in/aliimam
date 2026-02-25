/**
 * Auto-generated logo component: Square Chevron Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronRightOutlineLogo = React.forwardRef<SVGSVGElement, SquareChevronRightOutlineLogoProps>(
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
      <path d="M11 9l3 3l-3 3" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

SquareChevronRightOutlineLogo.displayName = "SquareChevronRightOutlineLogo";

export const SquareChevronRightOutlineLogoMetadata = {
  id: "square-chevron-right-outline",
  baseId: "square-chevron-right-outline",
  variant: "default",
  name: "Square Chevron Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronRightOutlineLogo;
