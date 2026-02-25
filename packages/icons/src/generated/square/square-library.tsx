/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareLibraryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareLibrary = React.forwardRef<SVGSVGElement, SquareLibraryProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M7 7v10" />
  <path d="M11 7v10" />
  <path d="m15 7 2 10" />
    </svg>
  )
);
SquareLibrary.displayName = "SquareLibrary";
export const SquareLibraryMetadata = { 
  id: "square-library", 
  baseId: "square-library", 
  variant: "default", 
  name: "Square Library", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareLibrary;
