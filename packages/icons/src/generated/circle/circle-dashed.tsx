/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleDashed = React.forwardRef<SVGSVGElement, CircleDashedProps>(
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
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
  <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
  <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
  <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
  <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
  <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
  <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
  <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </svg>
  )
);
CircleDashed.displayName = "CircleDashed";
export const CircleDashedMetadata = { 
  id: "circle-dashed", 
  baseId: "circle-dashed", 
  variant: "default", 
  name: "Circle Dashed", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleDashed;
