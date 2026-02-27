/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchZoomOut1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchZoomOut1Rounded = React.forwardRef<SVGSVGElement, SearchZoomOut1RoundedProps>(
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
      <path d="M9 11.7H14" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SearchZoomOut1Rounded.displayName = "SearchZoomOut1Rounded";
export const SearchZoomOut1RoundedMetadata = { 
  id: "search-zoom-out-1_rounded", 
  baseId: "search-zoom-out-1", 
  variant: "rounded", 
  name: "Search Zoom Out 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchZoomOut1Rounded;
