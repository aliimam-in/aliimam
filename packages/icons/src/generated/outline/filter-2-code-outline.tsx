/**
 * Auto-generated logo component: Filter 2 Code Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2CodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2CodeOutlineLogo = React.forwardRef<SVGSVGElement, Filter2CodeOutlineLogoProps>(
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
  <path d="M9 18h2" />
  <path d="M17 17l-2 2l2 2" />
  <path d="M20 21l2 -2l-2 -2" />
    </svg>
  )
);

Filter2CodeOutlineLogo.displayName = "Filter2CodeOutlineLogo";

export const Filter2CodeOutlineLogoMetadata = {
  id: "filter-2-code-outline",
  baseId: "filter-2-code-outline",
  variant: "default",
  name: "Filter 2 Code Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2CodeOutlineLogo;
