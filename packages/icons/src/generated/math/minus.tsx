/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Minus = React.forwardRef<SVGSVGElement, MinusProps>(
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
      <path d="M5 12h14" />
    </svg>
  )
);
Minus.displayName = "Minus";
export const MinusMetadata = { 
  id: "minus", 
  baseId: "minus", 
  variant: "default", 
  name: "Minus", 
  category: "math", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Minus;
