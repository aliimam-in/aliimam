/**
 * Auto-generated logo component: Dots Diagonal 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DotsDiagonal2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DotsDiagonal2OutlineLogo = React.forwardRef<SVGSVGElement, DotsDiagonal2OutlineLogoProps>(
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
      <path d="M6 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

DotsDiagonal2OutlineLogo.displayName = "DotsDiagonal2OutlineLogo";

export const DotsDiagonal2OutlineLogoMetadata = {
  id: "dots-diagonal-2-outline",
  baseId: "dots-diagonal-2-outline",
  variant: "default",
  name: "Dots Diagonal 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DotsDiagonal2OutlineLogo;
