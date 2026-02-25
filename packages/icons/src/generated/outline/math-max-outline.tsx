/**
 * Auto-generated logo component: Math Max Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathMaxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathMaxOutlineLogo = React.forwardRef<SVGSVGElement, MathMaxOutlineLogoProps>(
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
      <path d="M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M3 15s.616 -5.544 2.332 -7.93" />
  <path d="M8.637 7.112c2.717 3.313 5.882 12.888 8.363 12.888c2 0 3.333 -3 4 -9" />
    </svg>
  )
);

MathMaxOutlineLogo.displayName = "MathMaxOutlineLogo";

export const MathMaxOutlineLogoMetadata = {
  id: "math-max-outline",
  baseId: "math-max-outline",
  variant: "default",
  name: "Math Max Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathMaxOutlineLogo;
