/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrushProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Brush = React.forwardRef<SVGSVGElement, BrushProps>(
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
      <path d="m11 10 3 3" />
  <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
  <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
    </svg>
  )
);
Brush.displayName = "Brush";
export const BrushMetadata = { 
  id: "brush", 
  baseId: "brush", 
  variant: "default", 
  name: "Brush", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Brush;
