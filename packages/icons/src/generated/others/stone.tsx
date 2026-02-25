/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface StoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Stone = React.forwardRef<SVGSVGElement, StoneProps>(
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
      <path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" />
  <path d="M11.99 22 14 12l7.822 3.184" />
  <path d="M14 12 8.47 2.302" />
    </svg>
  )
);
Stone.displayName = "Stone";
export const StoneMetadata = { 
  id: "stone", 
  baseId: "stone", 
  variant: "default", 
  name: "Stone", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Stone;
