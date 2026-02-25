/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanText = React.forwardRef<SVGSVGElement, ScanTextProps>(
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M7 8h8" />
  <path d="M7 12h10" />
  <path d="M7 16h6" />
    </svg>
  )
);
ScanText.displayName = "ScanText";
export const ScanTextMetadata = { 
  id: "scan-text", 
  baseId: "scan-text", 
  variant: "default", 
  name: "Scan Text", 
  category: "scan", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScanText;
