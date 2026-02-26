/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleCheckBigProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleCheckBig = React.forwardRef<SVGSVGElement, CircleCheckBigProps>(
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
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
  <path d="m9 11 3 3L22 4" />
    </svg>
  )
);
CircleCheckBig.displayName = "CircleCheckBig";
export const CircleCheckBigMetadata = { 
  id: "circle-check-big", 
  baseId: "circle-check-big", 
  variant: "default", 
  name: "Circle Check Big", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleCheckBig;
