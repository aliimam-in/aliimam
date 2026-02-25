/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareCodeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareCode = React.forwardRef<SVGSVGElement, SquareCodeProps>(
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
      <path d="m10 9-3 3 3 3" />
  <path d="m14 15 3-3-3-3" />
  <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
);
SquareCode.displayName = "SquareCode";
export const SquareCodeMetadata = { 
  id: "square-code", 
  baseId: "square-code", 
  variant: "default", 
  name: "Square Code", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareCode;
