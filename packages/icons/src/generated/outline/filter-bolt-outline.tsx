/**
 * Auto-generated logo component: Filter Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterBoltOutlineLogo = React.forwardRef<SVGSVGElement, FilterBoltOutlineLogoProps>(
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
      <path d="M12.991 19.67l-3.991 1.33v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

FilterBoltOutlineLogo.displayName = "FilterBoltOutlineLogo";

export const FilterBoltOutlineLogoMetadata = {
  id: "filter-bolt-outline",
  baseId: "filter-bolt-outline",
  variant: "default",
  name: "Filter Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterBoltOutlineLogo;
