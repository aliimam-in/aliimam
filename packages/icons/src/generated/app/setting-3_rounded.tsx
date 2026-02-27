/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Setting3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Setting3Rounded = React.forwardRef<SVGSVGElement, Setting3RoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5699 18.5V14.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5699 7.45V5.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.57 12.65C17.0059 12.65 18.17 11.486 18.17 10.05C18.17 8.61407 17.0059 7.45001 15.57 7.45001C14.134 7.45001 12.97 8.61407 12.97 10.05C12.97 11.486 14.134 12.65 15.57 12.65Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.43005 18.5V16.55"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.43005 9.4V5.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.42996 16.55C9.8659 16.55 11.03 15.3859 11.03 13.95C11.03 12.514 9.8659 11.35 8.42996 11.35C6.99402 11.35 5.82996 12.514 5.82996 13.95C5.82996 15.3859 6.99402 16.55 8.42996 16.55Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Setting3Rounded.displayName = "Setting3Rounded";
export const Setting3RoundedMetadata = { 
  id: "setting-3_rounded", 
  baseId: "setting-3", 
  variant: "rounded", 
  name: "Setting 3", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Setting3Rounded;
