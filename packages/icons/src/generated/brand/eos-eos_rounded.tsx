/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface EosEosRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EosEosRounded = React.forwardRef<SVGSVGElement, EosEosRoundedProps>(
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
      <path d="M10.8001 3.40005L7.20007 7.70005C7.10007 7.90005 7.00007 8.20005 6.90007 8.40005L5.20007 17C5.10007 17.6 5.40007 18.3 5.90007 18.6L11.2001 21.6C11.6001 21.8 12.3001 21.8 12.7001 21.6L18.0001 18.6C18.5001 18.3 18.8001 17.6 18.7001 17L17.0001 8.40005C17.0001 8.20005 16.8001 7.90005 16.7001 7.70005L13.1001 3.40005C12.5001 2.60005 11.5001 2.60005 10.8001 3.40005Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8 8.5L12.5 20.7C12.3 21.1 11.7 21.1 11.6 20.7L7.19995 8.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
EosEosRounded.displayName = "EosEosRounded";
export const EosEosRoundedMetadata = { 
  id: "eos-eos_rounded", 
  baseId: "eos-eos", 
  variant: "rounded", 
  name: "Eos Eos", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default EosEosRounded;
