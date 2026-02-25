/**
 * Auto-generated logo component: Math Pi Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathPiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathPiOutlineLogo = React.forwardRef<SVGSVGElement, MathPiOutlineLogoProps>(
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
      <path d="M7 20v-16" />
  <path d="M17 4v16" />
  <path d="M20 4h-16" />
    </svg>
  )
);

MathPiOutlineLogo.displayName = "MathPiOutlineLogo";

export const MathPiOutlineLogoMetadata = {
  id: "math-pi-outline",
  baseId: "math-pi-outline",
  variant: "default",
  name: "Math Pi Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathPiOutlineLogo;
