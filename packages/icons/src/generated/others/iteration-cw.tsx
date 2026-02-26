/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface IterationCwProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IterationCw = React.forwardRef<SVGSVGElement, IterationCwProps>(
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
      <path d="M4 10a8 8 0 1 1 8 8H4" />
  <path d="m8 22-4-4 4-4" />
    </svg>
  )
);
IterationCw.displayName = "IterationCw";
export const IterationCwMetadata = { 
  id: "iteration-cw", 
  baseId: "iteration-cw", 
  variant: "default", 
  name: "Iteration Cw", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default IterationCw;
