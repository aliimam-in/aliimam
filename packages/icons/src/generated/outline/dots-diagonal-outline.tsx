/**
 * Auto-generated logo component: Dots Diagonal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotsDiagonalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DotsDiagonalOutlineLogo = React.forwardRef<SVGSVGElement, DotsDiagonalOutlineLogoProps>(
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
      <path d="M6 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

DotsDiagonalOutlineLogo.displayName = "DotsDiagonalOutlineLogo";

export const DotsDiagonalOutlineLogoMetadata = {
  id: "dots-diagonal-outline",
  baseId: "dots-diagonal-outline",
  variant: "default",
  name: "Dots Diagonal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DotsDiagonalOutlineLogo;
