/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TrontronTrxRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TrontronTrxRounded = React.forwardRef<SVGSVGElement, TrontronTrxRoundedProps>(
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
      <path d="M2.59991 3.60001L9.29991 20.4C9.69991 21.3 10.3999 21.4 10.9999 20.6L20.3999 8.70001C20.6999 8.30001 20.6999 7.70001 20.2999 7.40001L17.1999 4.30001C17.0999 4.10001 16.7999 4.00001 16.6999 4.00001L3.69991 2.30001C2.79991 2.10001 2.29991 2.70001 2.59991 3.60001Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 21L11 10L3 2.90002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 4L11 10L20 8.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TrontronTrxRounded.displayName = "TrontronTrxRounded";
export const TrontronTrxRoundedMetadata = { 
  id: "trontron-trx_rounded", 
  baseId: "trontron-trx", 
  variant: "rounded", 
  name: "Trontron Trx", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TrontronTrxRounded;
