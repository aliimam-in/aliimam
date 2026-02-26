/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GripHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GripHorizontal = React.forwardRef<SVGSVGElement, GripHorizontalProps>(
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
      <circle cx="12" cy="9" r="1" />
  <circle cx="19" cy="9" r="1" />
  <circle cx="5" cy="9" r="1" />
  <circle cx="12" cy="15" r="1" />
  <circle cx="19" cy="15" r="1" />
  <circle cx="5" cy="15" r="1" />
    </svg>
  )
);
GripHorizontal.displayName = "GripHorizontal";
export const GripHorizontalMetadata = { 
  id: "grip-horizontal", 
  baseId: "grip-horizontal", 
  variant: "default", 
  name: "Grip Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GripHorizontal;
