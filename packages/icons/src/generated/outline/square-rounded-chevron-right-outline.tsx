/**
 * Auto-generated logo component: Square Rounded Chevron Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronRightOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronRightOutlineLogoProps>(
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
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronRightOutlineLogo.displayName = "SquareRoundedChevronRightOutlineLogo";

export const SquareRoundedChevronRightOutlineLogoMetadata = {
  id: "square-rounded-chevron-right-outline",
  baseId: "square-rounded-chevron-right-outline",
  variant: "default",
  name: "Square Rounded Chevron Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronRightOutlineLogo;
