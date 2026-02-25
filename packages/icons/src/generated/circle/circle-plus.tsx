/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePlus = React.forwardRef<SVGSVGElement, CirclePlusProps>(
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
  <path d="M8 12h8" />
  <path d="M12 8v8" />
    </svg>
  )
);
CirclePlus.displayName = "CirclePlus";
export const CirclePlusMetadata = { 
  id: "circle-plus", 
  baseId: "circle-plus", 
  variant: "default", 
  name: "Circle Plus", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CirclePlus;
