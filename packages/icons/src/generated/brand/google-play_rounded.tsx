/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GooglePlayRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GooglePlayRounded = React.forwardRef<SVGSVGElement, GooglePlayRoundedProps>(
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
      <path d="M21.4 12.9L16.9 15.2L13.7 12L16.9 8.79999L21.4 11C22.2 11.4 22.2 12.6 21.4 12.9Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9 8.80002L13.7 12L4.1 21.6L3.5 21.9C2.8 22.3 2 21.7 2 20.9V3.10002C2 2.30002 2.8 1.80002 3.5 2.10002L16.9 8.80002Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9001 15.2L4.1001 21.6L13.7001 12L16.9001 15.2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.7001 12L4.1001 2.40002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GooglePlayRounded.displayName = "GooglePlayRounded";
export const GooglePlayRoundedMetadata = { 
  id: "google-play_rounded", 
  baseId: "google-play", 
  variant: "rounded", 
  name: "Google Play", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GooglePlayRounded;
