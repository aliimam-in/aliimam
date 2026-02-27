/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReceiptDisscountRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReceiptDisscountRounded = React.forwardRef<SVGSVGElement, ReceiptDisscountRoundedProps>(
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
      <path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 13L15 7"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9945 13H15.0035"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.99451 7.5H9.00349"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReceiptDisscountRounded.displayName = "ReceiptDisscountRounded";
export const ReceiptDisscountRoundedMetadata = { 
  id: "receipt-disscount_rounded", 
  baseId: "receipt-disscount", 
  variant: "rounded", 
  name: "Receipt Disscount", 
  category: "finance", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReceiptDisscountRounded;
