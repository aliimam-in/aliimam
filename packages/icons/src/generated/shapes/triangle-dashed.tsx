/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TriangleDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TriangleDashed = React.forwardRef<SVGSVGElement, TriangleDashedProps>(
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
      <path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
  <path d="M14 21h2" />
  <path d="m15.874 7.743 1 1.732" />
  <path d="m18.849 12.952 1 1.732" />
  <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
  <path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
  <path d="m5.136 12.952-1 1.732" />
  <path d="M8 21h2" />
  <path d="m8.102 7.743-1 1.732" />
    </svg>
  )
);
TriangleDashed.displayName = "TriangleDashed";
export const TriangleDashedMetadata = { 
  id: "triangle-dashed", 
  baseId: "triangle-dashed", 
  variant: "default", 
  name: "Triangle Dashed", 
  category: "shapes", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TriangleDashed;
