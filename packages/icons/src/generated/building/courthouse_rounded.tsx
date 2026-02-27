/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CourthouseRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CourthouseRounded = React.forwardRef<SVGSVGElement, CourthouseRoundedProps>(
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
      <path d="M2 22H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V8" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.57996 12H19.42" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.98999 12V22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M11.99 12V22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
<path d="M15.99 12V22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    </svg>
  )
);
CourthouseRounded.displayName = "CourthouseRounded";
export const CourthouseRoundedMetadata = { 
  id: "courthouse_rounded", 
  baseId: "courthouse", 
  variant: "rounded", 
  name: "Courthouse", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CourthouseRounded;
