/**
 * Auto-generated logo component: Square Rounded Chevron Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronDownOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronDownOutlineLogoProps>(
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
      <path d="M15 11l-3 3l-3 -3" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronDownOutlineLogo.displayName = "SquareRoundedChevronDownOutlineLogo";

export const SquareRoundedChevronDownOutlineLogoMetadata = {
  id: "square-rounded-chevron-down-outline",
  baseId: "square-rounded-chevron-down-outline",
  variant: "default",
  name: "Square Rounded Chevron Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronDownOutlineLogo;
