/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GoogleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GoogleRounded = React.forwardRef<SVGSVGElement, GoogleRoundedProps>(
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
      <path d="M15.1999 3H8.7999L1.3999 15.7L4.5999 21H19.3999C19.3999 21 22.5999 15.5 22.5999 15.6C22.5999 15.7 15.1999 3 15.1999 3Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.7998 3L19.3998 21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.1999 3L4.59985 21"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 15.7H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GoogleRounded.displayName = "GoogleRounded";
export const GoogleRoundedMetadata = { 
  id: "google_rounded", 
  baseId: "google", 
  variant: "rounded", 
  name: "Google", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GoogleRounded;
