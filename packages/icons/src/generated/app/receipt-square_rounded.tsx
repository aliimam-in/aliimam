/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ReceiptSquareRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ReceiptSquareRounded = React.forwardRef<SVGSVGElement, ReceiptSquareRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.89999 16.53C9.37999 16.01 10.12 16.05 10.54 16.62L11.14 17.42C11.61 18.05 12.39 18.05 12.86 17.42L13.45 16.63C13.87 16.07 14.61 16.03 15.09 16.54C16.14 17.66 16.99 17.29 16.99 15.72V9.09C16.99 6.72 16.43 6.13 14.21 6.13H9.76999C7.54999 6.13 6.98999 6.72 6.98999 9.09V15.72C6.99999 17.27 7.85999 17.64 8.89999 16.53Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ReceiptSquareRounded.displayName = "ReceiptSquareRounded";
export const ReceiptSquareRoundedMetadata = { 
  id: "receipt-square_rounded", 
  baseId: "receipt-square", 
  variant: "rounded", 
  name: "Receipt Square", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ReceiptSquareRounded;
