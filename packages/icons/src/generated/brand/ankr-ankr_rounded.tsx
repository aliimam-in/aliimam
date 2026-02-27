/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AnkrAnkrRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AnkrAnkrRounded = React.forwardRef<SVGSVGElement, AnkrAnkrRoundedProps>(
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
      <path d="M3.1001 9.8V6.4L12.0001 2L20.9001 6.4V9.8" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.1001 14.2V17.6L12.0001 22L20.9001 17.6V14.2" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V16.4" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0001 16.4C14.4302 16.4 16.4001 14.43 16.4001 12C16.4001 9.56992 14.4302 7.59998 12.0001 7.59998C9.57004 7.59998 7.6001 9.56992 7.6001 12C7.6001 14.43 9.57004 16.4 12.0001 16.4Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
AnkrAnkrRounded.displayName = "AnkrAnkrRounded";
export const AnkrAnkrRoundedMetadata = { 
  id: "ankr-ankr_rounded", 
  baseId: "ankr-ankr", 
  variant: "rounded", 
  name: "Ankr Ankr", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AnkrAnkrRounded;
