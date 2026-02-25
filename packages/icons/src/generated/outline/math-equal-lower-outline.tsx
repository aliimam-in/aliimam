/**
 * Auto-generated logo component: Math Equal Lower Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathEqualLowerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathEqualLowerOutlineLogo = React.forwardRef<SVGSVGElement, MathEqualLowerOutlineLogoProps>(
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
      <path d="M19 18l-14 -4" />
  <path d="M19 14l-14 -4l14 -4" />
    </svg>
  )
);

MathEqualLowerOutlineLogo.displayName = "MathEqualLowerOutlineLogo";

export const MathEqualLowerOutlineLogoMetadata = {
  id: "math-equal-lower-outline",
  baseId: "math-equal-lower-outline",
  variant: "default",
  name: "Math Equal Lower Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathEqualLowerOutlineLogo;
