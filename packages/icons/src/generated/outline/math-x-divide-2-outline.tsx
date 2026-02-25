/**
 * Auto-generated logo component: Math X Divide 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXDivide2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXDivide2OutlineLogo = React.forwardRef<SVGSVGElement, MathXDivide2OutlineLogoProps>(
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
  <path d="M9 3l6 6" />
  <path d="M9 9l6 -6" />
    </svg>
  )
);

MathXDivide2OutlineLogo.displayName = "MathXDivide2OutlineLogo";

export const MathXDivide2OutlineLogoMetadata = {
  id: "math-x-divide-2-outline",
  baseId: "math-x-divide-2-outline",
  variant: "default",
  name: "Math X Divide 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXDivide2OutlineLogo;
