/**
 * Auto-generated logo component: Search Check (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SearchCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SearchCheckLogo = React.forwardRef<SVGSVGElement, SearchCheckLogoProps>(
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
      <path d="m8 11 2 2 4-4" />
  <circle cx="11" cy="11" r="8" />
  <path d="m21 21-4.3-4.3" />
    </svg>
  )
);

SearchCheckLogo.displayName = "SearchCheckLogo";

export const SearchCheckLogoMetadata = {
  id: "search-check",
  baseId: "search-check",
  variant: "default",
  name: "Search Check",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SearchCheckLogo;
