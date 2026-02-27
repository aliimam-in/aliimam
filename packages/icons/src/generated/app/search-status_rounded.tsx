/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchStatusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchStatusRounded = React.forwardRef<SVGSVGElement, SearchStatusRoundedProps>(
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
      <path d="M14 5H20"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8H17"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SearchStatusRounded.displayName = "SearchStatusRounded";
export const SearchStatusRoundedMetadata = { 
  id: "search-status_rounded", 
  baseId: "search-status", 
  variant: "rounded", 
  name: "Search Status", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchStatusRounded;
