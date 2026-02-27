/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Building3RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Building3Rounded = React.forwardRef<SVGSVGElement, Building3RoundedProps>(
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
<path d="M15.01 21.99L3.01001 22.01L3 7.06998C3 6.39998 3.34001 5.77995 3.89001 5.40995L7.89001 2.73997C8.56001 2.28997 9.43999 2.28997 10.11 2.73997L14.11 5.40995C14.67 5.77995 15 6.39998 15 7.06998L15.01 21.99Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.98 22.01V18"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14H15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22V18.25"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
Building3Rounded.displayName = "Building3Rounded";
export const Building3RoundedMetadata = { 
  id: "building-3_rounded", 
  baseId: "building-3", 
  variant: "rounded", 
  name: "Building 3", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Building3Rounded;
