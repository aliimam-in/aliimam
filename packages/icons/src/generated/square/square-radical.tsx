/**
 * Auto-generated logo component: Square Radical (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRadicalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRadicalLogo = React.forwardRef<SVGSVGElement, SquareRadicalLogoProps>(
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
      <path d="M7 12h2l2 5 2-10h4" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);

SquareRadicalLogo.displayName = "SquareRadicalLogo";

export const SquareRadicalLogoMetadata = {
  id: "square-radical",
  baseId: "square-radical",
  variant: "default",
  name: "Square Radical",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRadicalLogo;
