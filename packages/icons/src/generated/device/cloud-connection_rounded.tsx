/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudConnectionRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudConnectionRounded = React.forwardRef<SVGSVGElement, CloudConnectionRoundedProps>(
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
      <path d="M6.36997 9.50999C2.28997 9.79999 2.29997 15.71 6.36997 16H16.03C17.2 16.01 18.33 15.57 19.2 14.78C22.06 12.28 20.53 7.27997 16.76 6.79997C15.41 -1.34003 3.61998 1.74999 6.40998 9.50999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16V19" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 21H14" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21H6" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloudConnectionRounded.displayName = "CloudConnectionRounded";
export const CloudConnectionRoundedMetadata = { 
  id: "cloud-connection_rounded", 
  baseId: "cloud-connection", 
  variant: "rounded", 
  name: "Cloud Connection", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudConnectionRounded;
