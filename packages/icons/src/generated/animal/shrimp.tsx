/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ShrimpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Shrimp = React.forwardRef<SVGSVGElement, ShrimpProps>(
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
      <path d="M11 12h.01" />
  <path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" />
  <path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" />
  <path d="M14 8a8.5 8.5 0 0 1 0 8" />
  <path d="M16 16c2 0 4.5-4 4-6" />
    </svg>
  )
);
Shrimp.displayName = "Shrimp";
export const ShrimpMetadata = { 
  id: "shrimp", 
  baseId: "shrimp", 
  variant: "default", 
  name: "Shrimp", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Shrimp;
