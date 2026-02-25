/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RectangleCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RectangleCircle = React.forwardRef<SVGSVGElement, RectangleCircleProps>(
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
      <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
  <circle cx="14" cy="12" r="8" />
    </svg>
  )
);
RectangleCircle.displayName = "RectangleCircle";
export const RectangleCircleMetadata = { 
  id: "rectangle-circle", 
  baseId: "rectangle-circle", 
  variant: "default", 
  name: "Rectangle Circle", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RectangleCircle;
