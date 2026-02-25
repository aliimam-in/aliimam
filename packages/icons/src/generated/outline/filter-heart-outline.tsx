/**
 * Auto-generated logo component: Filter Heart Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterHeartOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterHeartOutlineLogo = React.forwardRef<SVGSVGElement, FilterHeartOutlineLogoProps>(
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
      <path d="M10.888 20.37l-1.888 .63v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-3.503 3.503" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296" />
    </svg>
  )
);

FilterHeartOutlineLogo.displayName = "FilterHeartOutlineLogo";

export const FilterHeartOutlineLogoMetadata = {
  id: "filter-heart-outline",
  baseId: "filter-heart-outline",
  variant: "default",
  name: "Filter Heart Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterHeartOutlineLogo;
