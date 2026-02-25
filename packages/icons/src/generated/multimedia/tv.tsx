/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TvProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tv = React.forwardRef<SVGSVGElement, TvProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m17 2-5 5-5-5" />
  <rect width="20" height="15" x="2" y="7" rx="2" />
    </svg>
  )
);
Tv.displayName = "Tv";
export const TvMetadata = { id: "tv", baseId: "tv", variant: "default", name: "Tv", category: "multimedia", tags: [], viewBox: "0 0 24 24" } as const;
export default Tv;
