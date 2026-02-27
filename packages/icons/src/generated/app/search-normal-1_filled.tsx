/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchNormal1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchNormal1Filled = React.forwardRef<SVGSVGElement, SearchNormal1FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor"/>
<path d="M21.3001 22.0001C21.1201 22.0001 20.9401 21.9301 20.8101 21.8001L18.9501 19.9401C18.6801 19.6701 18.6801 19.2301 18.9501 18.9501C19.2201 18.6801 19.6601 18.6801 19.9401 18.9501L21.8001 20.8101C22.0701 21.0801 22.0701 21.5201 21.8001 21.8001C21.6601 21.9301 21.4801 22.0001 21.3001 22.0001Z" fill="currentColor"/>
    </svg>
  )
);
SearchNormal1Filled.displayName = "SearchNormal1Filled";
export const SearchNormal1FilledMetadata = { 
  id: "search-normal-1_filled", 
  baseId: "search-normal-1", 
  variant: "filled", 
  name: "Search Normal 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchNormal1Filled;
