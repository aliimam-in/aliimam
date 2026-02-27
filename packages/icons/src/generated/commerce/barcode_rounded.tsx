/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BarcodeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BarcodeRounded = React.forwardRef<SVGSVGElement, BarcodeRoundedProps>(
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
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8V12"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8V9"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 12V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 8V16"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BarcodeRounded.displayName = "BarcodeRounded";
export const BarcodeRoundedMetadata = { 
  id: "barcode_rounded", 
  baseId: "barcode", 
  variant: "rounded", 
  name: "Barcode", 
  category: "commerce", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BarcodeRounded;
