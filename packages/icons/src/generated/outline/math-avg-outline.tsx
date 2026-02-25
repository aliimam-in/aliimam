/**
 * Auto-generated logo component: Math Avg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathAvgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathAvgOutlineLogo = React.forwardRef<SVGSVGElement, MathAvgOutlineLogoProps>(
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
      <path d="M3 21l18 -18" />
  <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    </svg>
  )
);

MathAvgOutlineLogo.displayName = "MathAvgOutlineLogo";

export const MathAvgOutlineLogoMetadata = {
  id: "math-avg-outline",
  baseId: "math-avg-outline",
  variant: "default",
  name: "Math Avg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathAvgOutlineLogo;
