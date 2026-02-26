/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VectorSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VectorSquare = React.forwardRef<SVGSVGElement, VectorSquareProps>(
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
      <path d="M19.5 7a24 24 0 0 1 0 10" />
  <path d="M4.5 7a24 24 0 0 0 0 10" />
  <path d="M7 19.5a24 24 0 0 0 10 0" />
  <path d="M7 4.5a24 24 0 0 1 10 0" />
  <rect x="17" y="17" width="5" height="5" rx="1" />
  <rect x="17" y="2" width="5" height="5" rx="1" />
  <rect x="2" y="17" width="5" height="5" rx="1" />
  <rect x="2" y="2" width="5" height="5" rx="1" />
    </svg>
  )
);
VectorSquare.displayName = "VectorSquare";
export const VectorSquareMetadata = { 
  id: "vector-square", 
  baseId: "vector-square", 
  variant: "default", 
  name: "Vector Square", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VectorSquare;
