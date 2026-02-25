/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Tally1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tally1 = React.forwardRef<SVGSVGElement, Tally1Props>(
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
      <path d="M4 4v16" />
    </svg>
  )
);
Tally1.displayName = "Tally1";
export const Tally1Metadata = { 
  id: "tally-1", 
  baseId: "tally-1", 
  variant: "default", 
  name: "Tally 1", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tally1;
