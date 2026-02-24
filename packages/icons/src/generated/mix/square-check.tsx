/**
 * Auto-generated logo component: Square Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareCheckLogo = React.forwardRef<SVGSVGElement, SquareCheckLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  )
);

SquareCheckLogo.displayName = "SquareCheckLogo";

export const SquareCheckLogoMetadata = {
  id: "square-check",
  baseId: "square-check",
  variant: "default",
  name: "Square Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareCheckLogo;
