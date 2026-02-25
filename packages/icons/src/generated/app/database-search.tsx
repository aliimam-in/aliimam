/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DatabaseSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DatabaseSearch = React.forwardRef<SVGSVGElement, DatabaseSearchProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M21 11.693V5" />
  <path d="m22 22-1.875-1.875" />
  <path d="M3 12a9 3 0 0 0 8.697 2.998" />
  <path d="M3 5v14a9 3 0 0 0 9.28 2.999" />
  <circle cx="18" cy="18" r="3" />
  <ellipse cx="12" cy="5" rx="9" ry="3" />
    </svg>
  )
);
DatabaseSearch.displayName = "DatabaseSearch";
export const DatabaseSearchMetadata = { id: "database-search", baseId: "database-search", variant: "default", name: "Database Search", category: "app", tags: [], viewBox: "0 0 24 24" } as const;
export default DatabaseSearch;
