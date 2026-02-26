/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Minimize2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Minimize2 = React.forwardRef<SVGSVGElement, Minimize2Props>(
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
      <path d="m14 10 7-7" />
  <path d="M20 10h-6V4" />
  <path d="m3 21 7-7" />
  <path d="M4 14h6v6" />
    </svg>
  )
);
Minimize2.displayName = "Minimize2";
export const Minimize2Metadata = { 
  id: "minimize-2", 
  baseId: "minimize-2", 
  variant: "default", 
  name: "Minimize 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Minimize2;
