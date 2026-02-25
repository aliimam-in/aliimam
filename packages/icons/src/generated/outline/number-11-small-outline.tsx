/**
 * Auto-generated logo component: Number 11 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number11SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number11SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number11SmallOutlineLogoProps>(
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
      <path d="M8 8h1v8" />
  <path d="M14 8h1v8" />
    </svg>
  )
);

Number11SmallOutlineLogo.displayName = "Number11SmallOutlineLogo";

export const Number11SmallOutlineLogoMetadata = {
  id: "number-11-small-outline",
  baseId: "number-11-small-outline",
  variant: "default",
  name: "Number 11 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number11SmallOutlineLogo;
