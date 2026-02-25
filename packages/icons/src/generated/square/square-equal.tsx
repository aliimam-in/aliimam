/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareEqualProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareEqual = React.forwardRef<SVGSVGElement, SquareEqualProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 10h10" />
  <path d="M7 14h10" />
    </svg>
  )
);
SquareEqual.displayName = "SquareEqual";
export const SquareEqualMetadata = { id: "square-equal", baseId: "square-equal", variant: "default", name: "Square Equal", category: "square", tags: [], viewBox: "0 0 24 24" } as const;
export default SquareEqual;
