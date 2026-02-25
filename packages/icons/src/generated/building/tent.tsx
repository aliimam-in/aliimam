/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tent = React.forwardRef<SVGSVGElement, TentProps>(
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
      <path d="M3.5 21 14 3" />
  <path d="M20.5 21 10 3" />
  <path d="M15.5 21 12 15l-3.5 6" />
  <path d="M2 21h20" />
    </svg>
  )
);
Tent.displayName = "Tent";
export const TentMetadata = { 
  id: "tent", 
  baseId: "tent", 
  variant: "default", 
  name: "Tent", 
  category: "building", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tent;
