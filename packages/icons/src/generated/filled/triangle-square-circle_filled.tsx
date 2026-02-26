/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TriangleSquareCircleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TriangleSquareCircleFilled = React.forwardRef<SVGSVGElement, TriangleSquareCircleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.132 2.504l-4 7a1 1 0 0 0 .868 1.496h8a1 1 0 0 0 .868 -1.496l-4 -7a1 1 0 0 0 -1.736 0z" />
  <path d="M17 13a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
  <path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" />
    </svg>
  )
);
TriangleSquareCircleFilled.displayName = "TriangleSquareCircleFilled";
export const TriangleSquareCircleFilledMetadata = { 
  id: "triangle-square-circle_filled", 
  baseId: "triangle-square-circle", 
  variant: "filled", 
  name: "Triangle Square Circle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TriangleSquareCircleFilled;
