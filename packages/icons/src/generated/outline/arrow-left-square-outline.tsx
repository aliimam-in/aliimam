/**
 * Auto-generated logo component: Arrow Left Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftSquareOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftSquareOutlineLogoProps>(
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
      <path d="M17 12h-14" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 14h-4v-4h4l0 4" />
    </svg>
  )
);

ArrowLeftSquareOutlineLogo.displayName = "ArrowLeftSquareOutlineLogo";

export const ArrowLeftSquareOutlineLogoMetadata = {
  id: "arrow-left-square-outline",
  baseId: "arrow-left-square-outline",
  variant: "default",
  name: "Arrow Left Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftSquareOutlineLogo;
