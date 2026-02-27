/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AvalancheAvaxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AvalancheAvaxRounded = React.forwardRef<SVGSVGElement, AvalancheAvaxRoundedProps>(
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
      <path d="M6.10004 15.6L11.7 6.00002C11.9 5.70002 12.3 5.70002 12.5 6.00002L14 8.00002C14.4 8.60002 14.5 9.40002 14.1 10L10.8 15.3C10.5 15.8 9.90004 16.2 9.30004 16.2H6.40004C6.10004 16.3 5.90004 15.9 6.10004 15.6Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2001 12.4L13.3001 15.6C13.1001 15.9 13.3001 16.3 13.7001 16.3H17.5001C17.9001 16.3 18.1001 15.9 17.9001 15.6L16.0001 12.4C15.8001 12.1 15.4001 12.1 15.2001 12.4Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
AvalancheAvaxRounded.displayName = "AvalancheAvaxRounded";
export const AvalancheAvaxRoundedMetadata = { 
  id: "avalanche-avax_rounded", 
  baseId: "avalanche-avax", 
  variant: "rounded", 
  name: "Avalanche Avax", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AvalancheAvaxRounded;
