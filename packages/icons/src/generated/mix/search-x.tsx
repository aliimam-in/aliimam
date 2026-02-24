/**
 * Auto-generated logo component: Search X (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SearchXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SearchXLogo = React.forwardRef<SVGSVGElement, SearchXLogoProps>(
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
      <path d="m13.5 8.5-5 5" />
  <path d="m8.5 8.5 5 5" />
  <circle cx="11" cy="11" r="8" />
  <path d="m21 21-4.3-4.3" />
    </svg>
  )
);

SearchXLogo.displayName = "SearchXLogo";

export const SearchXLogoMetadata = {
  id: "search-x",
  baseId: "search-x",
  variant: "default",
  name: "Search X",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SearchXLogo;
