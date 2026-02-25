/**
 * Auto-generated logo component: Math Xy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXyOutlineLogo = React.forwardRef<SVGSVGElement, MathXyOutlineLogoProps>(
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
      <path d="M14 9l3 5.063" />
  <path d="M4 9l6 6" />
  <path d="M4 15l6 -6" />
  <path d="M20 9l-4.8 9" />
    </svg>
  )
);

MathXyOutlineLogo.displayName = "MathXyOutlineLogo";

export const MathXyOutlineLogoMetadata = {
  id: "math-xy-outline",
  baseId: "math-xy-outline",
  variant: "default",
  name: "Math Xy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXyOutlineLogo;
