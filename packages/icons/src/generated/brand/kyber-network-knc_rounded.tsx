/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface KyberNetworkKncRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KyberNetworkKncRounded = React.forwardRef<SVGSVGElement, KyberNetworkKncRoundedProps>(
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
      <path d="M11 2.59999L6 5.39999C5.4 5.79999 5 6.39999 5 7.09999V16C5 16.6 5.3 17.3 5.8 17.6L10.8 21.2C11.5 21.7 12.4 21.7 13.1 21.2L18.1 17.6C18.6 17.2 18.9 16.6 18.9 16V7.19999C18.9 6.49999 18.5 5.79999 17.9 5.49999L12.9 2.59999C12.4 2.19999 11.6 2.19999 11 2.59999Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3L10 12L11.8 21.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2 16.9L10 12L18.5 7.29999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
KyberNetworkKncRounded.displayName = "KyberNetworkKncRounded";
export const KyberNetworkKncRoundedMetadata = { 
  id: "kyber-network-knc_rounded", 
  baseId: "kyber-network-knc", 
  variant: "rounded", 
  name: "Kyber Network Knc", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default KyberNetworkKncRounded;
