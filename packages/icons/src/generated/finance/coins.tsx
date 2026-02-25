/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CoinsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Coins = React.forwardRef<SVGSVGElement, CoinsProps>(
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
      <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
  <path d="M15 6h1v4" />
  <path d="m6.134 14.768.866-.5 2 3.464" />
  <circle cx="16" cy="8" r="6" />
    </svg>
  )
);
Coins.displayName = "Coins";
export const CoinsMetadata = { 
  id: "coins", 
  baseId: "coins", 
  variant: "default", 
  name: "Coins", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Coins;
