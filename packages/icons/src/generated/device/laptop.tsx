/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LaptopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Laptop = React.forwardRef<SVGSVGElement, LaptopProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
  <path d="M20.054 15.987H3.946" />
    </svg>
  )
);
Laptop.displayName = "Laptop";
export const LaptopMetadata = { id: "laptop", baseId: "laptop", variant: "default", name: "Laptop", category: "device", tags: [], viewBox: "0 0 24 24" } as const;
export default Laptop;
