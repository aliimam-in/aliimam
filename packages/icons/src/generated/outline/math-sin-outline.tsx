/**
 * Auto-generated logo component: Math Sin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathSinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathSinOutlineLogo = React.forwardRef<SVGSVGElement, MathSinOutlineLogoProps>(
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
      <path d="M4 15c.345 .6 1.258 1 2 1a2 2 0 1 0 0 -4a2 2 0 1 1 0 -4c.746 0 1.656 .394 2 1" />
  <path d="M12 8v8" />
  <path d="M16 16v-8l4 8v-8" />
    </svg>
  )
);

MathSinOutlineLogo.displayName = "MathSinOutlineLogo";

export const MathSinOutlineLogoMetadata = {
  id: "math-sin-outline",
  baseId: "math-sin-outline",
  variant: "default",
  name: "Math Sin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathSinOutlineLogo;
