/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AaveAaveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AaveAaveRounded = React.forwardRef<SVGSVGElement, AaveAaveRoundedProps>(
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
      <path d="M8 16L12 7L16 16" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H12" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10"/>
    </svg>
  )
);
AaveAaveRounded.displayName = "AaveAaveRounded";
export const AaveAaveRoundedMetadata = { 
  id: "aave-aave_rounded", 
  baseId: "aave-aave", 
  variant: "rounded", 
  name: "Aave Aave", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AaveAaveRounded;
