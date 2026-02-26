/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LaptopMinimalCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LaptopMinimalCheck = React.forwardRef<SVGSVGElement, LaptopMinimalCheckProps>(
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
      <path d="M2 20h20" />
  <path d="m9 10 2 2 4-4" />
  <rect x="3" y="4" width="18" height="12" rx="2" />
    </svg>
  )
);
LaptopMinimalCheck.displayName = "LaptopMinimalCheck";
export const LaptopMinimalCheckMetadata = { 
  id: "laptop-minimal-check", 
  baseId: "laptop-minimal-check", 
  variant: "default", 
  name: "Laptop Minimal Check", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LaptopMinimalCheck;
