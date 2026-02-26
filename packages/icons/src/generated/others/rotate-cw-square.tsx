/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RotateCwSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RotateCwSquare = React.forwardRef<SVGSVGElement, RotateCwSquareProps>(
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
      <path d="M12 5H6a2 2 0 0 0-2 2v3" />
  <path d="m9 8 3-3-3-3" />
  <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    </svg>
  )
);
RotateCwSquare.displayName = "RotateCwSquare";
export const RotateCwSquareMetadata = { 
  id: "rotate-cw-square", 
  baseId: "rotate-cw-square", 
  variant: "default", 
  name: "Rotate Cw Square", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RotateCwSquare;
