/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FacebookRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FacebookRounded = React.forwardRef<SVGSVGElement, FacebookRoundedProps>(
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
      <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FacebookRounded.displayName = "FacebookRounded";
export const FacebookRoundedMetadata = { 
  id: "facebook_rounded", 
  baseId: "facebook", 
  variant: "rounded", 
  name: "Facebook", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FacebookRounded;
