/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Columns3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Columns3 = React.forwardRef<SVGSVGElement, Columns3Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  )
);
Columns3.displayName = "Columns3";
export const Columns3Metadata = { id: "columns-3", baseId: "columns-3", variant: "default", name: "Columns 3", category: "layout", tags: [], viewBox: "0 0 24 24" } as const;
export default Columns3;
