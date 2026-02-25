/**
 * Auto-generated logo component: Square Equal (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareEqualLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareEqualLogo = React.forwardRef<SVGSVGElement, SquareEqualLogoProps>(
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
  <path d="M7 10h10" />
  <path d="M7 14h10" />
    </svg>
  )
);

SquareEqualLogo.displayName = "SquareEqualLogo";

export const SquareEqualLogoMetadata = {
  id: "square-equal",
  baseId: "square-equal",
  variant: "default",
  name: "Square Equal",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareEqualLogo;
