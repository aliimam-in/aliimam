/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleArrowDown = React.forwardRef<SVGSVGElement, CircleArrowDownProps>(
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
  <path d="M12 8v8" />
  <path d="m8 12 4 4 4-4" />
    </svg>
  )
);
CircleArrowDown.displayName = "CircleArrowDown";
export const CircleArrowDownMetadata = { 
  id: "circle-arrow-down", 
  baseId: "circle-arrow-down", 
  variant: "default", 
  name: "Circle Arrow Down", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleArrowDown;
