/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PackageSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PackageSearch = React.forwardRef<SVGSVGElement, PackageSearchProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 22V12" />
  <path d="M20.27 18.27 22 20" />
  <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
  <path d="M3.29 7 12 12l8.71-5" />
  <path d="m7.5 4.27 8.997 5.148" />
  <circle cx="18.5" cy="16.5" r="2.5" />
    </svg>
  )
);
PackageSearch.displayName = "PackageSearch";
export const PackageSearchMetadata = { id: "package-search", baseId: "package-search", variant: "default", name: "Package Search", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default PackageSearch;
