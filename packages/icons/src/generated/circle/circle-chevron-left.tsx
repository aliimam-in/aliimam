/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleChevronLeft = React.forwardRef<SVGSVGElement, CircleChevronLeftProps>(
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
  <path d="m14 16-4-4 4-4" />
    </svg>
  )
);
CircleChevronLeft.displayName = "CircleChevronLeft";
export const CircleChevronLeftMetadata = { 
  id: "circle-chevron-left", 
  baseId: "circle-chevron-left", 
  variant: "default", 
  name: "Circle Chevron Left", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleChevronLeft;
