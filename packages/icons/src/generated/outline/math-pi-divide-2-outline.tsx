/**
 * Auto-generated logo component: Math Pi Divide 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathPiDivide2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathPiDivide2OutlineLogo = React.forwardRef<SVGSVGElement, MathPiDivide2OutlineLogoProps>(
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
      <path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
  <path d="M5 12h14" />
  <path d="M10 9v-6" />
  <path d="M14 3v6" />
  <path d="M15 3h-6" />
    </svg>
  )
);

MathPiDivide2OutlineLogo.displayName = "MathPiDivide2OutlineLogo";

export const MathPiDivide2OutlineLogoMetadata = {
  id: "math-pi-divide-2-outline",
  baseId: "math-pi-divide-2-outline",
  variant: "default",
  name: "Math Pi Divide 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathPiDivide2OutlineLogo;
