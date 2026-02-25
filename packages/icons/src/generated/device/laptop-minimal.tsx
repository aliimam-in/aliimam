/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LaptopMinimalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LaptopMinimal = React.forwardRef<SVGSVGElement, LaptopMinimalProps>(
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
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
  <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  )
);
LaptopMinimal.displayName = "LaptopMinimal";
export const LaptopMinimalMetadata = { 
  id: "laptop-minimal", 
  baseId: "laptop-minimal", 
  variant: "default", 
  name: "Laptop Minimal", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LaptopMinimal;
