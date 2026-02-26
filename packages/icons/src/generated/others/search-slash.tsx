/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchSlash = React.forwardRef<SVGSVGElement, SearchSlashProps>(
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
      <path d="m13.5 8.5-5 5" />
  <circle cx="11" cy="11" r="8" />
  <path d="m21 21-4.3-4.3" />
    </svg>
  )
);
SearchSlash.displayName = "SearchSlash";
export const SearchSlashMetadata = { 
  id: "search-slash", 
  baseId: "search-slash", 
  variant: "default", 
  name: "Search Slash", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchSlash;
