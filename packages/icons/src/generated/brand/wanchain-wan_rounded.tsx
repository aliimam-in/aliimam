/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WanchainWanRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WanchainWanRounded = React.forwardRef<SVGSVGElement, WanchainWanRoundedProps>(
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
      <path d="M16.5 8.90001L12 6.20001L7.5 8.90001" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 9V15.1L12 12.4L16.5 15.1V9" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.2 16.2L12 17.7L9.80005 16.2" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#17191C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WanchainWanRounded.displayName = "WanchainWanRounded";
export const WanchainWanRoundedMetadata = { 
  id: "wanchain-wan_rounded", 
  baseId: "wanchain-wan", 
  variant: "rounded", 
  name: "Wanchain Wan", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WanchainWanRounded;
