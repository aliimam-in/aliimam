/**
 * Auto-generated logo component: Square Rounded Arrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedArrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedArrowRightOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedArrowRightOutlineLogoProps>(
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
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedArrowRightOutlineLogo.displayName = "SquareRoundedArrowRightOutlineLogo";

export const SquareRoundedArrowRightOutlineLogoMetadata = {
  id: "square-rounded-arrow-right-outline",
  baseId: "square-rounded-arrow-right-outline",
  variant: "default",
  name: "Square Rounded Arrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedArrowRightOutlineLogo;
