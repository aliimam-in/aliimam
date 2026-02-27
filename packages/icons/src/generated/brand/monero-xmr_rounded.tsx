/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoneroXmrRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoneroXmrRounded = React.forwardRef<SVGSVGElement, MoneroXmrRoundedProps>(
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.1001 15H7.0001V9L12.0001 15L17.0001 9V15H20.9001"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
MoneroXmrRounded.displayName = "MoneroXmrRounded";
export const MoneroXmrRoundedMetadata = { 
  id: "monero-xmr_rounded", 
  baseId: "monero-xmr", 
  variant: "rounded", 
  name: "Monero Xmr", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoneroXmrRounded;
