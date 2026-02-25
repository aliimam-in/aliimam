/**
 * Auto-generated logo component: Search Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SearchOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SearchOffOutlineLogo = React.forwardRef<SVGSVGElement, SearchOffOutlineLogoProps>(
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
      <path d="M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584 -2.434a7 7 0 0 0 -9.038 -9.057" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SearchOffOutlineLogo.displayName = "SearchOffOutlineLogo";

export const SearchOffOutlineLogoMetadata = {
  id: "search-off-outline",
  baseId: "search-off-outline",
  variant: "default",
  name: "Search Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SearchOffOutlineLogo;
