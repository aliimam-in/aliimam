/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BirdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bird = React.forwardRef<SVGSVGElement, BirdProps>(
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
      <path d="M16 7h.01" />
  <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
  <path d="m20 7 2 .5-2 .5" />
  <path d="M10 18v3" />
  <path d="M14 17.75V21" />
  <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
);
Bird.displayName = "Bird";
export const BirdMetadata = { 
  id: "bird", 
  baseId: "bird", 
  variant: "default", 
  name: "Bird", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bird;
