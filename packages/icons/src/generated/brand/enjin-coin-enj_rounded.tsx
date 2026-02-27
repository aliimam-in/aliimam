/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EnjinCoinEnjRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EnjinCoinEnjRounded = React.forwardRef<SVGSVGElement, EnjinCoinEnjRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8 8H10.8C9.20005 8 7.80005 9.4 7.80005 11V12V13C7.80005 14.6 9.20005 16 10.8 16H15.8" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8 12H7.80005" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
EnjinCoinEnjRounded.displayName = "EnjinCoinEnjRounded";
export const EnjinCoinEnjRoundedMetadata = { 
  id: "enjin-coin-enj_rounded", 
  baseId: "enjin-coin-enj", 
  variant: "rounded", 
  name: "Enjin Coin Enj", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EnjinCoinEnjRounded;
