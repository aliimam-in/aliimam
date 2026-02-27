/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BeRounded = React.forwardRef<SVGSVGElement, BeRoundedProps>(
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
      <path d="M2 12H9C10.7 12 12 13.3 12 15C12 16.7 10.7 18 9 18H3C2.4 18 2 17.6 2 17V7C2 6.4 2.4 6 3 6H8C9.7 6 11 7.3 11 9C11 10.7 9.7 12 8 12H2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M14 14H22C22 11.8 20.2 10 18 10C15.8 10 14 11.8 14 14ZM14 14C14 16.2 15.8 18 18 18H19.7" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5 7.5H16.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BeRounded.displayName = "BeRounded";
export const BeRoundedMetadata = { 
  id: "be_rounded", 
  baseId: "be", 
  variant: "rounded", 
  name: "Be", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BeRounded;
