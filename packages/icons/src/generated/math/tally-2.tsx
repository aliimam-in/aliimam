/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Tally2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tally2 = React.forwardRef<SVGSVGElement, Tally2Props>(
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
    </svg>
  )
);
Tally2.displayName = "Tally2";
export const Tally2Metadata = { 
  id: "tally-2", 
  baseId: "tally-2", 
  variant: "default", 
  name: "Tally 2", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tally2;
