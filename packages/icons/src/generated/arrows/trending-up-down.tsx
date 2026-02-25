/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrendingUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrendingUpDown = React.forwardRef<SVGSVGElement, TrendingUpDownProps>(
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
      <path d="M14.828 14.828 21 21" />
  <path d="M21 16v5h-5" />
  <path d="m21 3-9 9-4-4-6 6" />
  <path d="M21 8V3h-5" />
    </svg>
  )
);
TrendingUpDown.displayName = "TrendingUpDown";
export const TrendingUpDownMetadata = { 
  id: "trending-up-down", 
  baseId: "trending-up-down", 
  variant: "default", 
  name: "Trending Up Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrendingUpDown;
