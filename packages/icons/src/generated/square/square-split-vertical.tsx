/**
 * Auto-generated logo component: Square Split Vertical (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareSplitVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareSplitVerticalLogo = React.forwardRef<SVGSVGElement, SquareSplitVerticalLogoProps>(
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
      <path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
  <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
  <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  )
);

SquareSplitVerticalLogo.displayName = "SquareSplitVerticalLogo";

export const SquareSplitVerticalLogoMetadata = {
  id: "square-split-vertical",
  baseId: "square-split-vertical",
  variant: "default",
  name: "Square Split Vertical",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareSplitVerticalLogo;
