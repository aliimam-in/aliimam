/**
 * Auto-generated logo component: Square Rounded Chevron Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronLeftOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronLeftOutlineLogoProps>(
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
      <path d="M13 15l-3 -3l3 -3" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronLeftOutlineLogo.displayName = "SquareRoundedChevronLeftOutlineLogo";

export const SquareRoundedChevronLeftOutlineLogoMetadata = {
  id: "square-rounded-chevron-left-outline",
  baseId: "square-rounded-chevron-left-outline",
  variant: "default",
  name: "Square Rounded Chevron Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronLeftOutlineLogo;
