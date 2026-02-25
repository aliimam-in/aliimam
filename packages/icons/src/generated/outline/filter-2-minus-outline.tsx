/**
 * Auto-generated logo component: Filter 2 Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2MinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2MinusOutlineLogo = React.forwardRef<SVGSVGElement, Filter2MinusOutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M6 12h12" />
  <path d="M9 18h3" />
  <path d="M16 19h6" />
    </svg>
  )
);

Filter2MinusOutlineLogo.displayName = "Filter2MinusOutlineLogo";

export const Filter2MinusOutlineLogoMetadata = {
  id: "filter-2-minus-outline",
  baseId: "filter-2-minus-outline",
  variant: "default",
  name: "Filter 2 Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2MinusOutlineLogo;
