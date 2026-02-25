/**
 * Auto-generated logo component: Number 71 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number71SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number71SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number71SmallOutlineLogoProps>(
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
      <path d="M15 8h1v8" />
  <path d="M7 8h4l-2 8" />
    </svg>
  )
);

Number71SmallOutlineLogo.displayName = "Number71SmallOutlineLogo";

export const Number71SmallOutlineLogoMetadata = {
  id: "number-71-small-outline",
  baseId: "number-71-small-outline",
  variant: "default",
  name: "Number 71 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number71SmallOutlineLogo;
