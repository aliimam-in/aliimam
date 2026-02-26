/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CornerLeftUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CornerLeftUp = React.forwardRef<SVGSVGElement, CornerLeftUpProps>(
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
      <path d="M14 9 9 4 4 9" />
  <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </svg>
  )
);
CornerLeftUp.displayName = "CornerLeftUp";
export const CornerLeftUpMetadata = { 
  id: "corner-left-up", 
  baseId: "corner-left-up", 
  variant: "default", 
  name: "Corner Left Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CornerLeftUp;
