/**
 * Auto-generated logo component: Square Rounded Chevrons Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronsLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronsLeftOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronsLeftOutlineLogoProps>(
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
      <path d="M15 15l-3 -3l3 -3" />
  <path d="M11 15l-3 -3l3 -3" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronsLeftOutlineLogo.displayName = "SquareRoundedChevronsLeftOutlineLogo";

export const SquareRoundedChevronsLeftOutlineLogoMetadata = {
  id: "square-rounded-chevrons-left-outline",
  baseId: "square-rounded-chevrons-left-outline",
  variant: "default",
  name: "Square Rounded Chevrons Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronsLeftOutlineLogo;
