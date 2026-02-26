/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowOutDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowOutDownLeft = React.forwardRef<SVGSVGElement, CircleArrowOutDownLeftProps>(
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
      <path d="M2 12a10 10 0 1 1 10 10" />
  <path d="m2 22 10-10" />
  <path d="M8 22H2v-6" />
    </svg>
  )
);
CircleArrowOutDownLeft.displayName = "CircleArrowOutDownLeft";
export const CircleArrowOutDownLeftMetadata = { 
  id: "circle-arrow-out-down-left", 
  baseId: "circle-arrow-out-down-left", 
  variant: "default", 
  name: "Circle Arrow Out Down Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowOutDownLeft;
