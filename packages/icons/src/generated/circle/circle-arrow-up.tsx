/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowUp = React.forwardRef<SVGSVGElement, CircleArrowUpProps>(
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
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
    </svg>
  )
);
CircleArrowUp.displayName = "CircleArrowUp";
export const CircleArrowUpMetadata = { 
  id: "circle-arrow-up", 
  baseId: "circle-arrow-up", 
  variant: "default", 
  name: "Circle Arrow Up", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowUp;
