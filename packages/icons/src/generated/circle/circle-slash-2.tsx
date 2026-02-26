/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleSlash2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleSlash2 = React.forwardRef<SVGSVGElement, CircleSlash2Props>(
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
  <path d="M22 2 2 22" />
    </svg>
  )
);
CircleSlash2.displayName = "CircleSlash2";
export const CircleSlash2Metadata = { 
  id: "circle-slash-2", 
  baseId: "circle-slash-2", 
  variant: "default", 
  name: "Circle Slash 2", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleSlash2;
