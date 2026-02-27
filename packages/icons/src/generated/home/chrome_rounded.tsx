/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChromeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChromeRounded = React.forwardRef<SVGSVGElement, ChromeRoundedProps>(
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
      <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.17 8C18.15 7.34 15.02 7.34 12 8"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.95 6.06L3.97 6.12C4.98 9.01 6.53 11.69 8.54 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.88 21.94C12.94 19.67 14.49 16.99 15.43 14.08L15.46 14"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ChromeRounded.displayName = "ChromeRounded";
export const ChromeRoundedMetadata = { 
  id: "chrome_rounded", 
  baseId: "chrome", 
  variant: "rounded", 
  name: "Chrome", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChromeRounded;
