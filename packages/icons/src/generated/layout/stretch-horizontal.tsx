/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StretchHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StretchHorizontal = React.forwardRef<SVGSVGElement, StretchHorizontalProps>(
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
      <rect width="20" height="6" x="2" y="4" rx="2" />
  <rect width="20" height="6" x="2" y="14" rx="2" />
    </svg>
  )
);
StretchHorizontal.displayName = "StretchHorizontal";
export const StretchHorizontalMetadata = { 
  id: "stretch-horizontal", 
  baseId: "stretch-horizontal", 
  variant: "default", 
  name: "Stretch Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default StretchHorizontal;
