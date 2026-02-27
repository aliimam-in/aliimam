/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Google1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Google1Rounded = React.forwardRef<SVGSVGElement, Google1RoundedProps>(
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
      <path d="M21.6 10.2H12.2V13.9H17.7C17.6 14.8 17 16.2 15.7 17.1C14.9 17.7 13.7 18.1 12.2 18.1C9.59995 18.1 7.29995 16.4 6.49995 13.9C6.29995 13.3 6.19995 12.6 6.19995 11.9C6.19995 11.2 6.29995 10.5 6.49995 9.9C6.59995 9.7 6.59995 9.5 6.69995 9.4C7.59995 7.3 9.69995 5.8 12.2 5.8C14.1 5.8 15.3 6.6 16.1 7.3L18.9 4.5C17.1999 3 14.9 2 12.2 2C8.29995 2 4.89995 4.2 3.29995 7.5C2.59995 8.9 2.19995 10.4 2.19995 12C2.19995 13.6 2.59995 15.1 3.29995 16.5C4.89995 19.8 8.29995 22 12.2 22C14.9 22 17.1999 21.1 18.7999 19.6C20.6999 17.9 21.7999 15.3 21.7999 12.2C21.7999 11.4 21.7 10.8 21.6 10.2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Google1Rounded.displayName = "Google1Rounded";
export const Google1RoundedMetadata = { 
  id: "google-1_rounded", 
  baseId: "google-1", 
  variant: "rounded", 
  name: "Google 1", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Google1Rounded;
