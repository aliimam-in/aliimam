/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PointerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pointer = React.forwardRef<SVGSVGElement, PointerProps>(
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
      <path d="M22 14a8 8 0 0 1-8 8" />
  <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
  <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
  <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
  <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
);
Pointer.displayName = "Pointer";
export const PointerMetadata = { 
  id: "pointer", 
  baseId: "pointer", 
  variant: "default", 
  name: "Pointer", 
  category: "cursor", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Pointer;
