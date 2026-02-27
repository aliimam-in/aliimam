/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HouseRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HouseRounded = React.forwardRef<SVGSVGElement, HouseRoundedProps>(
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
      <path d="M2 22H22"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"   strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M19.0001 7L18.9701 4H14.5701"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HouseRounded.displayName = "HouseRounded";
export const HouseRoundedMetadata = { 
  id: "house_rounded", 
  baseId: "house", 
  variant: "rounded", 
  name: "House", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HouseRounded;
