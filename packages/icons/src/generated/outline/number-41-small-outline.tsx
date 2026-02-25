/**
 * Auto-generated logo component: Number 41 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number41SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number41SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number41SmallOutlineLogoProps>(
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
  <path d="M6 8v3a1 1 0 0 0 1 1h3" />
  <path d="M10 8v8" />
    </svg>
  )
);

Number41SmallOutlineLogo.displayName = "Number41SmallOutlineLogo";

export const Number41SmallOutlineLogoMetadata = {
  id: "number-41-small-outline",
  baseId: "number-41-small-outline",
  variant: "default",
  name: "Number 41 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number41SmallOutlineLogo;
