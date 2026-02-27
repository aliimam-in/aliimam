/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Wallet3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Wallet3Rounded = React.forwardRef<SVGSVGElement, Wallet3RoundedProps>(
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
      <path d="M13 11.15H7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.62V14.68C22 15.24 21.5399 15.7 20.9699 15.7H19.0399C17.9599 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.0599 12.61 17.4799 12.2C17.8499 11.82 18.36 11.6 18.92 11.6H20.9699C21.5399 11.6 22 12.06 22 12.62Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Wallet3Rounded.displayName = "Wallet3Rounded";
export const Wallet3RoundedMetadata = { 
  id: "wallet-3_rounded", 
  baseId: "wallet-3", 
  variant: "rounded", 
  name: "Wallet 3", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Wallet3Rounded;
