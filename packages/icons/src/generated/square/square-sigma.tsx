/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareSigmaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareSigma = React.forwardRef<SVGSVGElement, SquareSigmaProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
    </svg>
  )
);
SquareSigma.displayName = "SquareSigma";
export const SquareSigmaMetadata = { 
  id: "square-sigma", 
  baseId: "square-sigma", 
  variant: "default", 
  name: "Square Sigma", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareSigma;
