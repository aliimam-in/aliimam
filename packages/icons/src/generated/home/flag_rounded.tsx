/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlagRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlagRounded = React.forwardRef<SVGSVGElement, FlagRoundedProps>(
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
      <path d="M5.14999 2V22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.14999 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.14999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FlagRounded.displayName = "FlagRounded";
export const FlagRoundedMetadata = { 
  id: "flag_rounded", 
  baseId: "flag", 
  variant: "rounded", 
  name: "Flag", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlagRounded;
