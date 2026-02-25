/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowRight = React.forwardRef<SVGSVGElement, CircleArrowRightProps>(
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
  <path d="m12 16 4-4-4-4" />
  <path d="M8 12h8" />
    </svg>
  )
);
CircleArrowRight.displayName = "CircleArrowRight";
export const CircleArrowRightMetadata = { 
  id: "circle-arrow-right", 
  baseId: "circle-arrow-right", 
  variant: "default", 
  name: "Circle Arrow Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowRight;
