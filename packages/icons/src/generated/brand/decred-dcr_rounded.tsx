/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DecredDcrRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DecredDcrRounded = React.forwardRef<SVGSVGElement, DecredDcrRoundedProps>(
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
      <path d="M5.7 7.7L2 4H7L13 10H8.5C6.6 10 5 11.6 5 13.5C5 15.4 6.6 17 8.5 17H10L13 20H8.5C4.9 20 2 17.1 2 13.5C2 11 3.4 8.8 5.5 7.7H5.7Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.3 16.3L22 20H17L11 14H15.5C17.4 14 19 12.4 19 10.5C19 8.6 17.4 7 15.5 7H14L11 4H15.5C19.1 4 22 6.9 22 10.5C22 13 20.6 15.2 18.5 16.3H18.3Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DecredDcrRounded.displayName = "DecredDcrRounded";
export const DecredDcrRoundedMetadata = { 
  id: "decred-dcr_rounded", 
  baseId: "decred-dcr", 
  variant: "rounded", 
  name: "Decred Dcr", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DecredDcrRounded;
