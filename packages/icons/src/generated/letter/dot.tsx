/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dot = React.forwardRef<SVGSVGElement, DotProps>(
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
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
);
Dot.displayName = "Dot";
export const DotMetadata = { 
  id: "dot", 
  baseId: "dot", 
  variant: "default", 
  name: "Dot", 
  category: "letter", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dot;
