/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Tally3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tally3 = React.forwardRef<SVGSVGElement, Tally3Props>(
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
  <path d="M9 4v16" />
  <path d="M14 4v16" />
    </svg>
  )
);
Tally3.displayName = "Tally3";
export const Tally3Metadata = { 
  id: "tally-3", 
  baseId: "tally-3", 
  variant: "default", 
  name: "Tally 3", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tally3;
