/**
 * Auto-generated logo component: Number 1 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number1SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number1SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number1SmallOutlineLogoProps>(
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
      <path d="M11 8h1v8" />
    </svg>
  )
);

Number1SmallOutlineLogo.displayName = "Number1SmallOutlineLogo";

export const Number1SmallOutlineLogoMetadata = {
  id: "number-1-small-outline",
  baseId: "number-1-small-outline",
  variant: "default",
  name: "Number 1 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number1SmallOutlineLogo;
