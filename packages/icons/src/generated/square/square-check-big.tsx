/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareCheckBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareCheckBig = React.forwardRef<SVGSVGElement, SquareCheckBigProps>(
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
      <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
  <path d="m9 11 3 3L22 4" />
    </svg>
  )
);
SquareCheckBig.displayName = "SquareCheckBig";
export const SquareCheckBigMetadata = { 
  id: "square-check-big", 
  baseId: "square-check-big", 
  variant: "default", 
  name: "Square Check Big", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareCheckBig;
