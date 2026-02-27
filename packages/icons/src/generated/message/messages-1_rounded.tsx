/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Messages1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Messages1Rounded = React.forwardRef<SVGSVGElement, Messages1RoundedProps>(
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
      <path d="M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.4955 13.25H13.5045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.9955 13.25H10.0045"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.4955 13.25H6.5045"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Messages1Rounded.displayName = "Messages1Rounded";
export const Messages1RoundedMetadata = { 
  id: "messages-1_rounded", 
  baseId: "messages-1", 
  variant: "rounded", 
  name: "Messages 1", 
  category: "message", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Messages1Rounded;
