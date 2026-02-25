/**
 * Auto-generated logo component: Arrow Right Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightSquareOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightSquareOutlineLogoProps>(
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
      <path d="M7 12l14 0" />
  <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 10h4v4h-4l0 -4" />
    </svg>
  )
);

ArrowRightSquareOutlineLogo.displayName = "ArrowRightSquareOutlineLogo";

export const ArrowRightSquareOutlineLogoMetadata = {
  id: "arrow-right-square-outline",
  baseId: "arrow-right-square-outline",
  variant: "default",
  name: "Arrow Right Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightSquareOutlineLogo;
