/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChainlinkLinkRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChainlinkLinkRounded = React.forwardRef<SVGSVGElement, ChainlinkLinkRoundedProps>(
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
      <path d="M3 8.2V15.8C3 16.5 3.4 17.2 4 17.5L11 21.4C11.6 21.7 12.3 21.7 12.9 21.4L19.9 17.5C20.5 17.1 20.9 16.5 20.9 15.8V8.2C20.9 7.5 20.5 6.8 19.9 6.5L12.9 2.6C12.3 2.3 11.6 2.3 11 2.6L4 6.4C3.4 6.8 3 7.5 3 8.2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ChainlinkLinkRounded.displayName = "ChainlinkLinkRounded";
export const ChainlinkLinkRoundedMetadata = { 
  id: "chainlink-link_rounded", 
  baseId: "chainlink-link", 
  variant: "rounded", 
  name: "Chainlink Link", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChainlinkLinkRounded;
