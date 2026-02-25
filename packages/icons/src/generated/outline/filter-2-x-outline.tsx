/**
 * Auto-generated logo component: Filter 2 X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2XOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2XOutlineLogo = React.forwardRef<SVGSVGElement, Filter2XOutlineLogoProps>(
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
  <path d="M9 18h4" />
  <path d="M22 22l-5 -5m0 5l5 -5" />
    </svg>
  )
);

Filter2XOutlineLogo.displayName = "Filter2XOutlineLogo";

export const Filter2XOutlineLogoMetadata = {
  id: "filter-2-x-outline",
  baseId: "filter-2-x-outline",
  variant: "default",
  name: "Filter 2 X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2XOutlineLogo;
