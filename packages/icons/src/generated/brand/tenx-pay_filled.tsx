/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TenxPayFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TenxPayFilled = React.forwardRef<SVGSVGElement, TenxPayFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.79 12.71L15.95 14.55C15.56 14.94 14.93 14.94 14.54 14.55L12 12L9.45999 14.54C9.06999 14.93 8.43999 14.93 8.04999 14.54L6.20999 12.7C5.81999 12.31 5.81999 11.68 6.20999 11.29L8.04999 9.45C8.43999 9.06 9.06999 9.06 9.45999 9.45L12 12L14.54 9.46001C14.93 9.07001 15.56 9.07001 15.95 9.46001L17.79 11.3C18.18 11.68 18.18 12.32 17.79 12.71Z" fill="currentColor"/>
    </svg>
  )
);
TenxPayFilled.displayName = "TenxPayFilled";
export const TenxPayFilledMetadata = { 
  id: "tenx-pay_filled", 
  baseId: "tenx-pay", 
  variant: "filled", 
  name: "Tenx Pay", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TenxPayFilled;
