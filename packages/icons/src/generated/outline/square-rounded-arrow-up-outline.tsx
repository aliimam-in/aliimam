/**
 * Auto-generated logo component: Square Rounded Arrow Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedArrowUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedArrowUpOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedArrowUpOutlineLogoProps>(
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
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedArrowUpOutlineLogo.displayName = "SquareRoundedArrowUpOutlineLogo";

export const SquareRoundedArrowUpOutlineLogoMetadata = {
  id: "square-rounded-arrow-up-outline",
  baseId: "square-rounded-arrow-up-outline",
  variant: "default",
  name: "Square Rounded Arrow Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedArrowUpOutlineLogo;
