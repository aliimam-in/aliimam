/**
 * Auto-generated logo component: Square Rounded Arrow Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedArrowDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedArrowDownOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedArrowDownOutlineLogoProps>(
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
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedArrowDownOutlineLogo.displayName = "SquareRoundedArrowDownOutlineLogo";

export const SquareRoundedArrowDownOutlineLogoMetadata = {
  id: "square-rounded-arrow-down-outline",
  baseId: "square-rounded-arrow-down-outline",
  variant: "default",
  name: "Square Rounded Arrow Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedArrowDownOutlineLogo;
