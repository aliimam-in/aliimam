/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TenxPayRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TenxPayRounded = React.forwardRef<SVGSVGElement, TenxPayRoundedProps>(
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
      <path d="M12 12L8.8 8.79999L5.5 12L8.8 15.2L15.2 8.79999L18.5 12L15.2 15.2L12 12Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"   strokeMiterlimit="10"/>
    </svg>
  )
);
TenxPayRounded.displayName = "TenxPayRounded";
export const TenxPayRoundedMetadata = { 
  id: "tenx-pay_rounded", 
  baseId: "tenx-pay", 
  variant: "rounded", 
  name: "Tenx Pay", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TenxPayRounded;
