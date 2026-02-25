/**
 * Auto-generated logo component: Math Equal Greater Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathEqualGreaterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathEqualGreaterOutlineLogo = React.forwardRef<SVGSVGElement, MathEqualGreaterOutlineLogoProps>(
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
      <path d="M5 18l14 -4" />
  <path d="M5 14l14 -4l-14 -4" />
    </svg>
  )
);

MathEqualGreaterOutlineLogo.displayName = "MathEqualGreaterOutlineLogo";

export const MathEqualGreaterOutlineLogoMetadata = {
  id: "math-equal-greater-outline",
  baseId: "math-equal-greater-outline",
  variant: "default",
  name: "Math Equal Greater Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathEqualGreaterOutlineLogo;
