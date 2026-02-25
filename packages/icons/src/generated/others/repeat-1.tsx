/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Repeat1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Repeat1 = React.forwardRef<SVGSVGElement, Repeat1Props>(
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
      <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  <path d="M11 10h1v4" />
    </svg>
  )
);
Repeat1.displayName = "Repeat1";
export const Repeat1Metadata = { 
  id: "repeat-1", 
  baseId: "repeat-1", 
  variant: "default", 
  name: "Repeat 1", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Repeat1;
