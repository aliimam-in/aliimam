/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HuobiTokenHtRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HuobiTokenHtRounded = React.forwardRef<SVGSVGElement, HuobiTokenHtRoundedProps>(
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
      <path d="M16.1999 10C16.1999 10 15.9999 11 12.9999 15C10.0999 18.8 14.2999 21.6 14.7999 22H14.8999C15.4999 21.5 23.0999 16.7 16.1999 10Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.8001 7.79995C13.8001 5.49995 12.9001 3.39995 12.0001 2.19995C11.7001 1.89995 11.2001 1.99995 11.1001 2.39995C10.7001 3.89995 9.50005 7.09995 6.60005 10.8999C2.90005 15.6999 6.30005 20.8999 9.80005 21.8999C11.7001 22.3999 9.30005 20.8999 9.00005 17.7999C8.70005 13.8999 13.8001 10.9999 13.8001 7.79995Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HuobiTokenHtRounded.displayName = "HuobiTokenHtRounded";
export const HuobiTokenHtRoundedMetadata = { 
  id: "huobi-token-ht_rounded", 
  baseId: "huobi-token-ht", 
  variant: "rounded", 
  name: "Huobi Token Ht", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HuobiTokenHtRounded;
