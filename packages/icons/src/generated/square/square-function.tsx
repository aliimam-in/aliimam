/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareFunctionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareFunction = React.forwardRef<SVGSVGElement, SquareFunctionProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
  <path d="M9 11.2h5.7" />
    </svg>
  )
);
SquareFunction.displayName = "SquareFunction";
export const SquareFunctionMetadata = { id: "square-function", baseId: "square-function", variant: "default", name: "Square Function", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareFunction;
