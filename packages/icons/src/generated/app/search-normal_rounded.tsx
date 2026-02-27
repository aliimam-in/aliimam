/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchNormalRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchNormalRounded = React.forwardRef<SVGSVGElement, SearchNormalRoundedProps>(
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
      <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SearchNormalRounded.displayName = "SearchNormalRounded";
export const SearchNormalRoundedMetadata = { 
  id: "search-normal_rounded", 
  baseId: "search-normal", 
  variant: "rounded", 
  name: "Search Normal", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchNormalRounded;
