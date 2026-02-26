/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleOff = React.forwardRef<SVGSVGElement, CircleOffProps>(
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
      <path d="m2 2 20 20" />
  <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
  <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
    </svg>
  )
);
CircleOff.displayName = "CircleOff";
export const CircleOffMetadata = { 
  id: "circle-off", 
  baseId: "circle-off", 
  variant: "default", 
  name: "Circle Off", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleOff;
