/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrendingUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrendingUp = React.forwardRef<SVGSVGElement, TrendingUpProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M16 7h6v6" />
  <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  )
);
TrendingUp.displayName = "TrendingUp";
export const TrendingUpMetadata = { id: "trending-up", baseId: "trending-up", variant: "default", name: "Trending Up", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default TrendingUp;
