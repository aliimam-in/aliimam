/**
 * Auto-generated logo component: Filter (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FilterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FilterLogo = React.forwardRef<SVGSVGElement, FilterLogoProps>(
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  )
);

FilterLogo.displayName = "FilterLogo";

export const FilterLogoMetadata = {
  id: "filter",
  baseId: "filter",
  variant: "default",
  name: "Filter",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FilterLogo;
