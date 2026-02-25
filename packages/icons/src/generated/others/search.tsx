/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Search = React.forwardRef<SVGSVGElement, SearchProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="m21 21-4.34-4.34" />
  <circle cx="11" cy="11" r="8" />
    </svg>
  )
);
Search.displayName = "Search";
export const SearchMetadata = { 
  id: "search", 
  baseId: "search", 
  variant: "default", 
  name: "Search", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Search;
