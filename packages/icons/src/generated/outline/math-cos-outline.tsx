/**
 * Auto-generated logo component: Math Cos Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathCosOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathCosOutlineLogo = React.forwardRef<SVGSVGElement, MathCosOutlineLogoProps>(
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
      <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
  <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M17 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" />
    </svg>
  )
);

MathCosOutlineLogo.displayName = "MathCosOutlineLogo";

export const MathCosOutlineLogoMetadata = {
  id: "math-cos-outline",
  baseId: "math-cos-outline",
  variant: "default",
  name: "Math Cos Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathCosOutlineLogo;
