/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchZoomInRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchZoomInRounded = React.forwardRef<SVGSVGElement, SearchZoomInRoundedProps>(
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
      <path d="M9.19995 11.7H14.2"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7 14.2V9.20001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SearchZoomInRounded.displayName = "SearchZoomInRounded";
export const SearchZoomInRoundedMetadata = { 
  id: "search-zoom-in_rounded", 
  baseId: "search-zoom-in", 
  variant: "rounded", 
  name: "Search Zoom In", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchZoomInRounded;
