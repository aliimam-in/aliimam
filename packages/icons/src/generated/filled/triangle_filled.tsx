/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TriangleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TriangleFilled = React.forwardRef<SVGSVGElement, TriangleFilledProps>(
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
      <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
    </svg>
  )
);
TriangleFilled.displayName = "TriangleFilled";
export const TriangleFilledMetadata = { 
  id: "triangle_filled", 
  baseId: "triangle", 
  variant: "filled", 
  name: "Triangle", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TriangleFilled;
