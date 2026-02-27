/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BillRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BillRounded = React.forwardRef<SVGSVGElement, BillRoundedProps>(
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
      <path d="M3.67001 2.5V14.47C3.67001 15.45 4.13001 16.38 4.92001 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67001Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M2 2.5H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M8 8H16" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H16" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BillRounded.displayName = "BillRounded";
export const BillRoundedMetadata = { 
  id: "bill_rounded", 
  baseId: "bill", 
  variant: "rounded", 
  name: "Bill", 
  category: "document", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BillRounded;
