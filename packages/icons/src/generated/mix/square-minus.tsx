/**
 * Auto-generated logo component: Square Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareMinusLogo = React.forwardRef<SVGSVGElement, SquareMinusLogoProps>(
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
  <path d="M8 12h8" />
    </svg>
  )
);

SquareMinusLogo.displayName = "SquareMinusLogo";

export const SquareMinusLogoMetadata = {
  id: "square-minus",
  baseId: "square-minus",
  variant: "default",
  name: "Square Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareMinusLogo;
