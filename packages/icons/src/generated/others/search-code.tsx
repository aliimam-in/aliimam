/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SearchCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SearchCode = React.forwardRef<SVGSVGElement, SearchCodeProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m13 13.5 2-2.5-2-2.5" />
  <path d="m21 21-4.3-4.3" />
  <path d="M9 8.5 7 11l2 2.5" />
  <circle cx="11" cy="11" r="8" />
    </svg>
  )
);
SearchCode.displayName = "SearchCode";
export const SearchCodeMetadata = { id: "search-code", baseId: "search-code", variant: "default", name: "Search Code", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default SearchCode;
