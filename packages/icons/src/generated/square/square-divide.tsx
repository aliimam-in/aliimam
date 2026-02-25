/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareDivideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareDivide = React.forwardRef<SVGSVGElement, SquareDivideProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <line x1="8" x2="16" y1="12" y2="12" />
  <line x1="12" x2="12" y1="16" y2="16" />
  <line x1="12" x2="12" y1="8" y2="8" />
    </svg>
  )
);
SquareDivide.displayName = "SquareDivide";
export const SquareDivideMetadata = { 
  id: "square-divide", 
  baseId: "square-divide", 
  variant: "default", 
  name: "Square Divide", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareDivide;
