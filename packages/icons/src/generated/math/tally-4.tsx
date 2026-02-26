/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Tally4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tally4 = React.forwardRef<SVGSVGElement, Tally4Props>(
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
  <path d="M19 4v16" />
    </svg>
  )
);
Tally4.displayName = "Tally4";
export const Tally4Metadata = { 
  id: "tally-4", 
  baseId: "tally-4", 
  variant: "default", 
  name: "Tally 4", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tally4;
