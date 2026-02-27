/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface OkbOkbRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const OkbOkbRounded = React.forwardRef<SVGSVGElement, OkbOkbRoundedProps>(
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
      <path d="M17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C14.2386 7 12 9.23858 12 12C12 14.7614 14.2386 17 17 17Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 17C9.76142 17 12 14.7614 12 12C12 9.23858 9.76142 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
OkbOkbRounded.displayName = "OkbOkbRounded";
export const OkbOkbRoundedMetadata = { 
  id: "okb-okb_rounded", 
  baseId: "okb-okb", 
  variant: "rounded", 
  name: "Okb Okb", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default OkbOkbRounded;
