/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ScanLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ScanLine = React.forwardRef<SVGSVGElement, ScanLineProps>(
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
  <path d="M7 12h10" />
    </svg>
  )
);
ScanLine.displayName = "ScanLine";
export const ScanLineMetadata = { 
  id: "scan-line", 
  baseId: "scan-line", 
  variant: "default", 
  name: "Scan Line", 
  category: "scan", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ScanLine;
