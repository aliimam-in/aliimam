/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WanchainWan1RoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WanchainWan1Rounded = React.forwardRef<SVGSVGElement, WanchainWan1RoundedProps>(
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
      <path d="M15.7 3H8.9C8.5 3 8.2 3.4 8.4 3.8L11.5 9H5.3C5.1 9 4.9 9.1 4.9 9.2L1.2 14.7C1.1 14.9 1.1 15.1 1.2 15.3L4.6 20.4C4.8 20.7 5.3 20.7 5.4 20.4L7.9 16.2C8.1 15.9 8.5 15.9 8.7 16.2L11.8 20.9C11.9 21 12 21.1 12.2 21.1H18.7C18.9 21.1 19 21 19.1 20.9L22.8 15.4C22.9 15.2 22.9 15 22.8 14.9L16.1 3.2C16.1 3.1 15.9 3 15.7 3ZM8.5 15L11.7 9.4L14.5 14.2C14.7 14.5 14.5 15 14.1 15H8.5Z"   strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  )
);
WanchainWan1Rounded.displayName = "WanchainWan1Rounded";
export const WanchainWan1RoundedMetadata = { 
  id: "wanchain-wan-1_rounded", 
  baseId: "wanchain-wan-1", 
  variant: "rounded", 
  name: "Wanchain Wan 1", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WanchainWan1Rounded;
