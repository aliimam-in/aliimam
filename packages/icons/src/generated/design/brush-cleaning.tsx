/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BrushCleaningProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BrushCleaning = React.forwardRef<SVGSVGElement, BrushCleaningProps>(
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
      <path d="m16 22-1-4" />
  <path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" />
  <path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" />
  <path d="m8 22 1-4" />
    </svg>
  )
);
BrushCleaning.displayName = "BrushCleaning";
export const BrushCleaningMetadata = { 
  id: "brush-cleaning", 
  baseId: "brush-cleaning", 
  variant: "default", 
  name: "Brush Cleaning", 
  category: "design", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BrushCleaning;
