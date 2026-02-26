/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateCcwSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateCcwSquare = React.forwardRef<SVGSVGElement, RotateCcwSquareProps>(
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
      <path d="M20 9V7a2 2 0 0 0-2-2h-6" />
  <path d="m15 2-3 3 3 3" />
  <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    </svg>
  )
);
RotateCcwSquare.displayName = "RotateCcwSquare";
export const RotateCcwSquareMetadata = { 
  id: "rotate-ccw-square", 
  baseId: "rotate-ccw-square", 
  variant: "default", 
  name: "Rotate Ccw Square", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RotateCcwSquare;
