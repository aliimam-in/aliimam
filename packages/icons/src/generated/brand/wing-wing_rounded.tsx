/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WingWingRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WingWingRounded = React.forwardRef<SVGSVGElement, WingWingRoundedProps>(
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
      <path d="M16.0001 5H19.5001L22.2001 9.7L17.0001 19L15.1001 15.9L18.7001 9.7L16.0001 5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.0001 5H12.5001L15.2001 9.7L10.0001 19L8.1001 15.9L11.7001 9.7L9.0001 5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.80005 5H5.30005L8.00005 9.8L6.30005 12.7L1.80005 5Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WingWingRounded.displayName = "WingWingRounded";
export const WingWingRoundedMetadata = { 
  id: "wing-wing_rounded", 
  baseId: "wing-wing", 
  variant: "rounded", 
  name: "Wing Wing", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WingWingRounded;
