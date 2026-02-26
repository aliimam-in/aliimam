/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleSmallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleSmall = React.forwardRef<SVGSVGElement, CircleSmallProps>(
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
      <circle cx="12" cy="12" r="6" />
    </svg>
  )
);
CircleSmall.displayName = "CircleSmall";
export const CircleSmallMetadata = { 
  id: "circle-small", 
  baseId: "circle-small", 
  variant: "default", 
  name: "Circle Small", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleSmall;
