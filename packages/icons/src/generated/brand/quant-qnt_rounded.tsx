/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface QuantQntRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const QuantQntRounded = React.forwardRef<SVGSVGElement, QuantQntRoundedProps>(
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
      <path d="M12 2L3 7V17L12 22L17 19.5L21 22V17L17 14.8L21 12V7L12 2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6.40002L7 9.20002V14.8L12 17.6L17 14.8V9.20002L12 6.40002Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 7L7 9.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 17L7 14.8"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 7L17 9.2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V2"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22V18"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 20V15"   strokeMiterlimit="10"/>
    </svg>
  )
);
QuantQntRounded.displayName = "QuantQntRounded";
export const QuantQntRoundedMetadata = { 
  id: "quant-qnt_rounded", 
  baseId: "quant-qnt", 
  variant: "rounded", 
  name: "Quant Qnt", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default QuantQntRounded;
