/**
 * Auto-generated logo component: Math X Minus Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXMinusYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXMinusYOutlineLogo = React.forwardRef<SVGSVGElement, MathXMinusYOutlineLogoProps>(
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
  <path d="M16 9l3 5.063" />
  <path d="M22 9l-4.8 9" />
  <path d="M10 12h4" />
    </svg>
  )
);

MathXMinusYOutlineLogo.displayName = "MathXMinusYOutlineLogo";

export const MathXMinusYOutlineLogoMetadata = {
  id: "math-x-minus-y-outline",
  baseId: "math-x-minus-y-outline",
  variant: "default",
  name: "Math X Minus Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXMinusYOutlineLogo;
