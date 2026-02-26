/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FramerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Framer = React.forwardRef<SVGSVGElement, FramerProps>(
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
      <path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
    </svg>
  )
);
Framer.displayName = "Framer";
export const FramerMetadata = { 
  id: "framer", 
  baseId: "framer", 
  variant: "default", 
  name: "Framer", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Framer;
