/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanBarcodeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanBarcodeRounded = React.forwardRef<SVGSVGElement, ScanBarcodeRoundedProps>(
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
      <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ScanBarcodeRounded.displayName = "ScanBarcodeRounded";
export const ScanBarcodeRoundedMetadata = { 
  id: "scan-barcode_rounded", 
  baseId: "scan-barcode", 
  variant: "rounded", 
  name: "Scan Barcode", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScanBarcodeRounded;
