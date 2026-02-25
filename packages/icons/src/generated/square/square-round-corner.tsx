/**
 * Auto-generated logo component: Square Round Corner (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundCornerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundCornerLogo = React.forwardRef<SVGSVGElement, SquareRoundCornerLogoProps>(
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
      <path d="M21 11a8 8 0 0 0-8-8" />
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </svg>
  )
);

SquareRoundCornerLogo.displayName = "SquareRoundCornerLogo";

export const SquareRoundCornerLogoMetadata = {
  id: "square-round-corner",
  baseId: "square-round-corner",
  variant: "default",
  name: "Square Round Corner",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundCornerLogo;
