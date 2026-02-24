/**
 * Auto-generated logo component: Search (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SearchLogo = React.forwardRef<SVGSVGElement, SearchLogoProps>(
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
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  )
);

SearchLogo.displayName = "SearchLogo";

export const SearchLogoMetadata = {
  id: "search",
  baseId: "search",
  variant: "default",
  name: "Search",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SearchLogo;
