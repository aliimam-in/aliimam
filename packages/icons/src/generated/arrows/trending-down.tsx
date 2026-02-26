/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrendingDown = React.forwardRef<SVGSVGElement, TrendingDownProps>(
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
      <path d="M16 17h6v-6" />
  <path d="m22 17-8.5-8.5-5 5L2 7" />
    </svg>
  )
);
TrendingDown.displayName = "TrendingDown";
export const TrendingDownMetadata = { 
  id: "trending-down", 
  baseId: "trending-down", 
  variant: "default", 
  name: "Trending Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrendingDown;
