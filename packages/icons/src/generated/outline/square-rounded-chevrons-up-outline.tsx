/**
 * Auto-generated logo component: Square Rounded Chevrons Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedChevronsUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedChevronsUpOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedChevronsUpOutlineLogoProps>(
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
      <path d="M9 15l3 -3l3 3" />
  <path d="M9 11l3 -3l3 3" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedChevronsUpOutlineLogo.displayName = "SquareRoundedChevronsUpOutlineLogo";

export const SquareRoundedChevronsUpOutlineLogoMetadata = {
  id: "square-rounded-chevrons-up-outline",
  baseId: "square-rounded-chevrons-up-outline",
  variant: "default",
  name: "Square Rounded Chevrons Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedChevronsUpOutlineLogo;
