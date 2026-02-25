/**
 * Auto-generated logo component: Math Function Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathFunctionYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathFunctionYOutlineLogo = React.forwardRef<SVGSVGElement, MathFunctionYOutlineLogoProps>(
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
      <path d="M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2" />
  <path d="M5 12h6" />
  <path d="M15 12l3 5.063" />
  <path d="M21 12l-4.8 9" />
    </svg>
  )
);

MathFunctionYOutlineLogo.displayName = "MathFunctionYOutlineLogo";

export const MathFunctionYOutlineLogoMetadata = {
  id: "math-function-y-outline",
  baseId: "math-function-y-outline",
  variant: "default",
  name: "Math Function Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathFunctionYOutlineLogo;
