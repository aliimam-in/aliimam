/**
 * Auto-generated logo component: Number 40 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number40SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number40SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number40SmallOutlineLogoProps>(
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
      <path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
  <path d="M6 8v3a1 1 0 0 0 1 1h3" />
  <path d="M10 8v8" />
    </svg>
  )
);

Number40SmallOutlineLogo.displayName = "Number40SmallOutlineLogo";

export const Number40SmallOutlineLogoMetadata = {
  id: "number-40-small-outline",
  baseId: "number-40-small-outline",
  variant: "default",
  name: "Number 40 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number40SmallOutlineLogo;
