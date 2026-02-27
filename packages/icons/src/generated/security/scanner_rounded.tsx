/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScannerRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScannerRounded = React.forwardRef<SVGSVGElement, ScannerRoundedProps>(
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
      <path d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H22" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ScannerRounded.displayName = "ScannerRounded";
export const ScannerRoundedMetadata = { 
  id: "scanner_rounded", 
  baseId: "scanner", 
  variant: "rounded", 
  name: "Scanner", 
  category: "security", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScannerRounded;
