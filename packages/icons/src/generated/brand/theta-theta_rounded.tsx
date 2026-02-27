/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ThetaThetaRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThetaThetaRounded = React.forwardRef<SVGSVGElement, ThetaThetaRoundedProps>(
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
      <path d="M15.1 18H8.9C7.9 18 7 17.2 7 16.1V7.9C7 6.8 7.8 6 8.9 6H15.2C16.2 6 17.1 6.8 17.1 7.9V16.2C17 17.2 16.2 18 15.1 18Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.5V10.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10.5H14" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5V13.5" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13.5H14" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#17191C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ThetaThetaRounded.displayName = "ThetaThetaRounded";
export const ThetaThetaRoundedMetadata = { 
  id: "theta-theta_rounded", 
  baseId: "theta-theta", 
  variant: "rounded", 
  name: "Theta Theta", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ThetaThetaRounded;
