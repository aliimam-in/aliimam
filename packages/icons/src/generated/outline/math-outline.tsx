/**
 * Auto-generated logo component: Math Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathOutlineLogo = React.forwardRef<SVGSVGElement, MathOutlineLogoProps>(
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
      <path d="M19 5h-7l-4 14l-3 -6h-2" />
  <path d="M14 13l6 6" />
  <path d="M14 19l6 -6" />
    </svg>
  )
);

MathOutlineLogo.displayName = "MathOutlineLogo";

export const MathOutlineLogoMetadata = {
  id: "math-outline",
  baseId: "math-outline",
  variant: "default",
  name: "Math Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathOutlineLogo;
