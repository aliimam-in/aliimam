/**
 * Auto-generated logo component: Square Rounded Arrow Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedArrowLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedArrowLeftOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedArrowLeftOutlineLogoProps>(
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
      <path d="M12 8l-4 4l4 4" />
  <path d="M16 12h-8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedArrowLeftOutlineLogo.displayName = "SquareRoundedArrowLeftOutlineLogo";

export const SquareRoundedArrowLeftOutlineLogoMetadata = {
  id: "square-rounded-arrow-left-outline",
  baseId: "square-rounded-arrow-left-outline",
  variant: "default",
  name: "Square Rounded Arrow Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedArrowLeftOutlineLogo;
