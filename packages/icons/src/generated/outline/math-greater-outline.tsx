/**
 * Auto-generated logo component: Math Greater Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathGreaterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathGreaterOutlineLogo = React.forwardRef<SVGSVGElement, MathGreaterOutlineLogoProps>(
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
      <path d="M5 18l14 -6l-14 -6" />
    </svg>
  )
);

MathGreaterOutlineLogo.displayName = "MathGreaterOutlineLogo";

export const MathGreaterOutlineLogoMetadata = {
  id: "math-greater-outline",
  baseId: "math-greater-outline",
  variant: "default",
  name: "Math Greater Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathGreaterOutlineLogo;
