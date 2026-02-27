/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudChangeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudChangeRounded = React.forwardRef<SVGSVGElement, CloudChangeRoundedProps>(
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
      <path d="M8.11003 11.85C5.29003 12.05 5.30003 16.15 8.11003 16.35H14.78C15.59 16.36 16.37 16.05 16.97 15.51C18.95 13.78 17.8901 10.31 15.2901 9.98001C14.3601 4.34001 6.21006 6.48 8.14006 11.85" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15C2 18.87 5.13 22 9 22L7.95001 20.25" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloudChangeRounded.displayName = "CloudChangeRounded";
export const CloudChangeRoundedMetadata = { 
  id: "cloud-change_rounded", 
  baseId: "cloud-change", 
  variant: "rounded", 
  name: "Cloud Change", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudChangeRounded;
