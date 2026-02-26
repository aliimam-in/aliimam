/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PrinterCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PrinterCheck = React.forwardRef<SVGSVGElement, PrinterCheckProps>(
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
      <path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" />
  <path d="m16 19 2 2 4-4" />
  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
  <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </svg>
  )
);
PrinterCheck.displayName = "PrinterCheck";
export const PrinterCheckMetadata = { 
  id: "printer-check", 
  baseId: "printer-check", 
  variant: "default", 
  name: "Printer Check", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default PrinterCheck;
