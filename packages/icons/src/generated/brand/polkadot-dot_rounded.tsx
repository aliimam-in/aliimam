/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PolkadotDotRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PolkadotDotRounded = React.forwardRef<SVGSVGElement, PolkadotDotRoundedProps>(
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
      <path d="M5.4 13C4.8 12 4.5 10.8 4.5 9.5C4.5 5.4 7.9 2 12 2C16.1 2 19.5 5.4 19.5 9.5C19.5 13.6 16.1 17 12 17C12 17 9.3 17 8.3 19.2C8.1 19.7 8 20.3 8 21L10 7"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 21V21"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
PolkadotDotRounded.displayName = "PolkadotDotRounded";
export const PolkadotDotRoundedMetadata = { 
  id: "polkadot-dot_rounded", 
  baseId: "polkadot-dot", 
  variant: "rounded", 
  name: "Polkadot Dot", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PolkadotDotRounded;
