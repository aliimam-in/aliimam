/**
 * Auto-generated logo component: Square Arrow Right Exit (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowRightExitLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowRightExitLogo = React.forwardRef<SVGSVGElement, SquareArrowRightExitLogoProps>(
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
      <path d="M10 12h11" />
  <path d="m17 16 4-4-4-4" />
  <path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />
    </svg>
  )
);

SquareArrowRightExitLogo.displayName = "SquareArrowRightExitLogo";

export const SquareArrowRightExitLogoMetadata = {
  id: "square-arrow-right-exit",
  baseId: "square-arrow-right-exit",
  variant: "default",
  name: "Square Arrow Right Exit",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowRightExitLogo;
