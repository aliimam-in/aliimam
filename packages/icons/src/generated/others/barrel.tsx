/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BarrelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Barrel = React.forwardRef<SVGSVGElement, BarrelProps>(
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
      <path d="M10 3a41 41 0 0 0 0 18" />
  <path d="M14 3a41 41 0 0 1 0 18" />
  <path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" />
  <path d="M3.84 17h16.32" />
  <path d="M3.84 7h16.32" />
    </svg>
  )
);
Barrel.displayName = "Barrel";
export const BarrelMetadata = { 
  id: "barrel", 
  baseId: "barrel", 
  variant: "default", 
  name: "Barrel", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Barrel;
