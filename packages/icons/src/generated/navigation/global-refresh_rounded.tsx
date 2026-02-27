/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GlobalRefreshRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GlobalRefreshRounded = React.forwardRef<SVGSVGElement, GlobalRefreshRoundedProps>(
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
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 14.7C19.13 14.59 18.71 14.52 18.25 14.52C16.18 14.52 14.51 16.2 14.51 18.26C14.51 20.33 16.19 22 18.25 22C20.31 22 21.99 20.32 21.99 18.26C21.99 17.49 21.76 16.77 21.36 16.18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.04 14.8L18.79 13.37" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.04 14.8L18.58 15.86" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GlobalRefreshRounded.displayName = "GlobalRefreshRounded";
export const GlobalRefreshRoundedMetadata = { 
  id: "global-refresh_rounded", 
  baseId: "global-refresh", 
  variant: "rounded", 
  name: "Global Refresh", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GlobalRefreshRounded;
