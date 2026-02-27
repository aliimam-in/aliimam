/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IconIcxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IconIcxRounded = React.forwardRef<SVGSVGElement, IconIcxRoundedProps>(
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
      <path d="M20.2 3.79999H20.2999" stroke="#17191C" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.69995 20.2H3.79995" stroke="#17191C" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.6 6C14.5 5.4 13.3 5 12 5C8.1 5 5 8.1 5 12C5 13.3 5.4 14.6 6 15.7" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.30005 18C9.40005 18.7 10.6 19 12 19C15.9 19 19 15.9 19 12C19 10.7 18.6 9.39999 18 8.29999" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
IconIcxRounded.displayName = "IconIcxRounded";
export const IconIcxRoundedMetadata = { 
  id: "icon-icx_rounded", 
  baseId: "icon-icx", 
  variant: "rounded", 
  name: "Icon Icx", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default IconIcxRounded;
