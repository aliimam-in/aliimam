/**
 * Auto-generated logo component: Math Ctg Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MathCtgOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MathCtgOutlineLogo = React.forwardRef<SVGSVGElement, MathCtgOutlineLogoProps>(
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
      <path d="M10 8h4" />
  <path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M12 8v8" />
  <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </svg>
  )
);

MathCtgOutlineLogo.displayName = "MathCtgOutlineLogo";

export const MathCtgOutlineLogoMetadata = {
  id: "math-ctg-outline",
  baseId: "math-ctg-outline",
  variant: "default",
  name: "Math Ctg Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MathCtgOutlineLogo;
