/**
 * Auto-generated logo component: Square Root Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRootOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRootOutlineLogo = React.forwardRef<SVGSVGElement, SquareRootOutlineLogoProps>(
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
      <path d="M3 12h2l4 8l4 -16h8" />
    </svg>
  )
);

SquareRootOutlineLogo.displayName = "SquareRootOutlineLogo";

export const SquareRootOutlineLogoMetadata = {
  id: "square-root-outline",
  baseId: "square-root-outline",
  variant: "default",
  name: "Square Root Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRootOutlineLogo;
