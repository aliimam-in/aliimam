/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleCheck = React.forwardRef<SVGSVGElement, CircleCheckProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  )
);
CircleCheck.displayName = "CircleCheck";
export const CircleCheckMetadata = { 
  id: "circle-check", 
  baseId: "circle-check", 
  variant: "default", 
  name: "Circle Check", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleCheck;
