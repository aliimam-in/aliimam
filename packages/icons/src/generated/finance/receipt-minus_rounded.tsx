/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReceiptMinusRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReceiptMinusRounded = React.forwardRef<SVGSVGElement, ReceiptMinusRoundedProps>(
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
      <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.25 10H11.75"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReceiptMinusRounded.displayName = "ReceiptMinusRounded";
export const ReceiptMinusRoundedMetadata = { 
  id: "receipt-minus_rounded", 
  baseId: "receipt-minus", 
  variant: "rounded", 
  name: "Receipt Minus", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReceiptMinusRounded;
