/**
 * Auto-generated logo component: Square Arrow Right Enter (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowRightEnterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowRightEnterLogo = React.forwardRef<SVGSVGElement, SquareArrowRightEnterLogoProps>(
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
      <path d="m10 16 4-4-4-4" />
  <path d="M3 12h11" />
  <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
    </svg>
  )
);

SquareArrowRightEnterLogo.displayName = "SquareArrowRightEnterLogo";

export const SquareArrowRightEnterLogoMetadata = {
  id: "square-arrow-right-enter",
  baseId: "square-arrow-right-enter",
  variant: "default",
  name: "Square Arrow Right Enter",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowRightEnterLogo;
