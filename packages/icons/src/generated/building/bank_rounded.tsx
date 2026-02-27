/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BankRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BankRounded = React.forwardRef<SVGSVGElement, BankRoundedProps>(
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
      <path d="M12.37 2.15003L21.37 5.75C21.72 5.89 22 6.31 22 6.68V10C22 10.55 21.55 11 21 11H3C2.45 11 2 10.55 2 10V6.68C2 6.31 2.28 5.89 2.63 5.75L11.63 2.15003C11.83 2.07003 12.17 2.07003 12.37 2.15003Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 18V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 18V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 18V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 18V11"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 22H23"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BankRounded.displayName = "BankRounded";
export const BankRoundedMetadata = { 
  id: "bank_rounded", 
  baseId: "bank", 
  variant: "rounded", 
  name: "Bank", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BankRounded;
