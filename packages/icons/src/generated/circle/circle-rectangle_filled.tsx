/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleRectangleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleRectangleFilled = React.forwardRef<SVGSVGElement, CircleRectangleFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m0 5.66h-10a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1 -1v-4a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
CircleRectangleFilled.displayName = "CircleRectangleFilled";
export const CircleRectangleFilledMetadata = { 
  id: "circle-rectangle_filled", 
  baseId: "circle-rectangle", 
  variant: "filled", 
  name: "Circle Rectangle", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleRectangleFilled;
