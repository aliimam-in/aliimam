/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchFavorite1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchFavorite1Rounded = React.forwardRef<SVGSVGElement, SearchFavorite1RoundedProps>(
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
      <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4999 6.13002C14.1499 5.03002 14.5599 3.66002 15.7199 3.29002C16.3299 3.09002 17.0799 3.26002 17.5099 3.85002C17.9099 3.24002 18.6899 3.10002 19.2899 3.29002C20.4499 3.66002 20.8599 5.03002 20.5099 6.13002C19.9599 7.88002 18.0399 8.79002 17.5099 8.79002C16.9699 8.79002 15.0699 7.90002 14.4999 6.13002Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SearchFavorite1Rounded.displayName = "SearchFavorite1Rounded";
export const SearchFavorite1RoundedMetadata = { 
  id: "search-favorite-1_rounded", 
  baseId: "search-favorite-1", 
  variant: "rounded", 
  name: "Search Favorite 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchFavorite1Rounded;
