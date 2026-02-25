/**
 * Auto-generated logo component: Square Rounded Number 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedNumber4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedNumber4OutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedNumber4OutlineLogoProps>(
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
      <path d="M10 8v3a1 1 0 0 0 1 1h3" />
  <path d="M14 8v8" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
    </svg>
  )
);

SquareRoundedNumber4OutlineLogo.displayName = "SquareRoundedNumber4OutlineLogo";

export const SquareRoundedNumber4OutlineLogoMetadata = {
  id: "square-rounded-number-4-outline",
  baseId: "square-rounded-number-4-outline",
  variant: "default",
  name: "Square Rounded Number 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedNumber4OutlineLogo;
