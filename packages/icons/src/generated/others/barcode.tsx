/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BarcodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Barcode = React.forwardRef<SVGSVGElement, BarcodeProps>(
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
      <path d="M3 5v14" />
  <path d="M8 5v14" />
  <path d="M12 5v14" />
  <path d="M17 5v14" />
  <path d="M21 5v14" />
    </svg>
  )
);
Barcode.displayName = "Barcode";
export const BarcodeMetadata = { 
  id: "barcode", 
  baseId: "barcode", 
  variant: "default", 
  name: "Barcode", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Barcode;
