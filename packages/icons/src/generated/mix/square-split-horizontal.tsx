/**
 * Auto-generated logo component: Square Split Horizontal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareSplitHorizontalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareSplitHorizontalLogo = React.forwardRef<SVGSVGElement, SquareSplitHorizontalLogoProps>(
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
      <path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
  <path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
  <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
);

SquareSplitHorizontalLogo.displayName = "SquareSplitHorizontalLogo";

export const SquareSplitHorizontalLogoMetadata = {
  id: "square-split-horizontal",
  baseId: "square-split-horizontal",
  variant: "default",
  name: "Square Split Horizontal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareSplitHorizontalLogo;
