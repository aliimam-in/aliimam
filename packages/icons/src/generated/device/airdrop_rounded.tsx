/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AirdropRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AirdropRounded = React.forwardRef<SVGSVGElement, AirdropRoundedProps>(
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
      <path d="M14.13 11.34C14.52 9.70002 13.09 8.26997 11.45 8.65997C10.68 8.84997 10.05 9.47999 9.85998 10.25C9.46998 11.89 10.9 13.32 12.54 12.93C13.32 12.74 13.95 12.11 14.13 11.34Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3 16.66L8.85998 18.45C7.71998 19.88 8.72997 21.99 10.56 21.99H13.43C15.26 21.99 16.28 19.87 15.13 18.45L13.69 16.66C12.83 15.57 11.17 15.57 10.3 16.66Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
AirdropRounded.displayName = "AirdropRounded";
export const AirdropRoundedMetadata = { 
  id: "airdrop_rounded", 
  baseId: "airdrop", 
  variant: "rounded", 
  name: "Airdrop", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AirdropRounded;
