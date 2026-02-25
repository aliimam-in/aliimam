/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Box = React.forwardRef<SVGSVGElement, BoxProps>(
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  <path d="m3.3 7 8.7 5 8.7-5" />
  <path d="M12 22V12" />
    </svg>
  )
);
Box.displayName = "Box";
export const BoxMetadata = { 
  id: "box", 
  baseId: "box", 
  variant: "default", 
  name: "Box", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Box;
