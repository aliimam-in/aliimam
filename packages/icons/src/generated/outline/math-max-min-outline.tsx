/**
 * Auto-generated logo component: Math Max Min Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathMaxMinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathMaxMinOutlineLogo = React.forwardRef<SVGSVGElement, MathMaxMinOutlineLogoProps>(
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
      <path d="M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719" />
  <path d="M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038" />
    </svg>
  )
);

MathMaxMinOutlineLogo.displayName = "MathMaxMinOutlineLogo";

export const MathMaxMinOutlineLogoMetadata = {
  id: "math-max-min-outline",
  baseId: "math-max-min-outline",
  variant: "default",
  name: "Math Max Min Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathMaxMinOutlineLogo;
