/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FtxTokenFttRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FtxTokenFttRounded = React.forwardRef<SVGSVGElement, FtxTokenFttRoundedProps>(
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
      <path d="M21 2H9C8.4 2 8 2.4 8 3V6C8 6.6 8.4 7 9 7H21C21.6 7 22 6.6 22 6V3C22 2.4 21.6 2 21 2Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17H7V22H12V17Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9.5H2V14.5H7V9.5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 9.59998H9.5V14.3H18V9.59998Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FtxTokenFttRounded.displayName = "FtxTokenFttRounded";
export const FtxTokenFttRoundedMetadata = { 
  id: "ftx-token-ftt_rounded", 
  baseId: "ftx-token-ftt", 
  variant: "rounded", 
  name: "Ftx Token Ftt", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FtxTokenFttRounded;
