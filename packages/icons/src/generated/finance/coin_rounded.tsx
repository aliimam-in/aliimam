/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CoinRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CoinRounded = React.forwardRef<SVGSVGElement, CoinRoundedProps>(
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
      <path d="M18.5 12.65V16.35C18.5 19.47 15.59 22 12 22C8.41 22 5.5 19.47 5.5 16.35V12.65C5.5 15.77 8.41 18 12 18C15.59 18 18.5 15.77 18.5 12.65Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CoinRounded.displayName = "CoinRounded";
export const CoinRoundedMetadata = { 
  id: "coin_rounded", 
  baseId: "coin", 
  variant: "rounded", 
  name: "Coin", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CoinRounded;
