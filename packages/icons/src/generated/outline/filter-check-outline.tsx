/**
 * Auto-generated logo component: Filter Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterCheckOutlineLogo = React.forwardRef<SVGSVGElement, FilterCheckOutlineLogoProps>(
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
      <path d="M11.18 20.274l-2.18 .726v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

FilterCheckOutlineLogo.displayName = "FilterCheckOutlineLogo";

export const FilterCheckOutlineLogoMetadata = {
  id: "filter-check-outline",
  baseId: "filter-check-outline",
  variant: "default",
  name: "Filter Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterCheckOutlineLogo;
