/**
 * Auto-generated logo component: Math X Divide Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathXDivideYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathXDivideYOutlineLogo = React.forwardRef<SVGSVGElement, MathXDivideYOutlineLogoProps>(
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
      <path d="M9 3l6 6" />
  <path d="M9 9l6 -6" />
  <path d="M9 15l3 4.5" />
  <path d="M15 15l-4.5 7" />
  <path d="M5 12h14" />
    </svg>
  )
);

MathXDivideYOutlineLogo.displayName = "MathXDivideYOutlineLogo";

export const MathXDivideYOutlineLogoMetadata = {
  id: "math-x-divide-y-outline",
  baseId: "math-x-divide-y-outline",
  variant: "default",
  name: "Math X Divide Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathXDivideYOutlineLogo;
