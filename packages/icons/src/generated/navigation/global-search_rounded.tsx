/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GlobalSearchRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GlobalSearchRounded = React.forwardRef<SVGSVGElement, GlobalSearchRoundedProps>(
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
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3C15.97 5.92 16.46 8.96 16.46 12"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L21 21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GlobalSearchRounded.displayName = "GlobalSearchRounded";
export const GlobalSearchRoundedMetadata = { 
  id: "global-search_rounded", 
  baseId: "global-search", 
  variant: "rounded", 
  name: "Global Search", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GlobalSearchRounded;
