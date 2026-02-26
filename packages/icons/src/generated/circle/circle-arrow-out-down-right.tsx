/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowOutDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowOutDownRight = React.forwardRef<SVGSVGElement, CircleArrowOutDownRightProps>(
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
      <path d="M12 22a10 10 0 1 1 10-10" />
  <path d="M22 22 12 12" />
  <path d="M22 16v6h-6" />
    </svg>
  )
);
CircleArrowOutDownRight.displayName = "CircleArrowOutDownRight";
export const CircleArrowOutDownRightMetadata = { 
  id: "circle-arrow-out-down-right", 
  baseId: "circle-arrow-out-down-right", 
  variant: "default", 
  name: "Circle Arrow Out Down Right", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowOutDownRight;
