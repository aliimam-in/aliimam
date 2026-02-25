/**
 * Auto-generated logo component: Math Min Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathMinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathMinOutlineLogo = React.forwardRef<SVGSVGElement, MathMinOutlineLogoProps>(
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
      <path d="M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M3 13s1 -9 4 -9c2.48 0 5.643 9.565 8.36 12.883" />
  <path d="M18.748 17.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
    </svg>
  )
);

MathMinOutlineLogo.displayName = "MathMinOutlineLogo";

export const MathMinOutlineLogoMetadata = {
  id: "math-min-outline",
  baseId: "math-min-outline",
  variant: "default",
  name: "Math Min Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathMinOutlineLogo;
