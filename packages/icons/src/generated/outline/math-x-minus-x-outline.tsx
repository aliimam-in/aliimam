/**
 * Auto-generated logo component: Math X Minus X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXMinusXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXMinusXOutlineLogo = React.forwardRef<SVGSVGElement, MathXMinusXOutlineLogoProps>(
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
      <path d="M2 9l6 6" />
  <path d="M2 15l6 -6" />
  <path d="M16 9l6 6" />
  <path d="M16 15l6 -6" />
  <path d="M10 12h4" />
    </svg>
  )
);

MathXMinusXOutlineLogo.displayName = "MathXMinusXOutlineLogo";

export const MathXMinusXOutlineLogoMetadata = {
  id: "math-x-minus-x-outline",
  baseId: "math-x-minus-x-outline",
  variant: "default",
  name: "Math X Minus X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXMinusXOutlineLogo;
