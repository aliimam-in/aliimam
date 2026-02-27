/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchStatus1FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchStatus1Filled = React.forwardRef<SVGSVGElement, SearchStatus1FilledProps>(
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
      <path d="M11 1.99023C6.02999 1.99023 1.98999 6.03023 1.98999 11.0002C1.98999 15.9702 6.02999 20.0102 11 20.0102C15.97 20.0102 20.01 15.9702 20.01 11.0002C20.01 6.03023 15.97 1.99023 11 1.99023ZM11 13.2502H7.99999C7.58999 13.2502 7.24999 12.9102 7.24999 12.5002C7.24999 12.0902 7.58999 11.7502 7.99999 11.7502H11C11.41 11.7502 11.75 12.0902 11.75 12.5002C11.75 12.9102 11.41 13.2502 11 13.2502ZM14 10.2502H7.99999C7.58999 10.2502 7.24999 9.91023 7.24999 9.50023C7.24999 9.09023 7.58999 8.75023 7.99999 8.75023H14C14.41 8.75023 14.75 9.09023 14.75 9.50023C14.75 9.91023 14.41 10.2502 14 10.2502Z" fill="currentColor"/>
<path d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z" fill="currentColor"/>
    </svg>
  )
);
SearchStatus1Filled.displayName = "SearchStatus1Filled";
export const SearchStatus1FilledMetadata = { 
  id: "search-status-1_filled", 
  baseId: "search-status-1", 
  variant: "filled", 
  name: "Search Status 1", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SearchStatus1Filled;
