/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Flask2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Flask2Filled = React.forwardRef<SVGSVGElement, Flask2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M15 2a1 1 0 0 1 0 2v5.674l.062 .03a7 7 0 0 1 3.85 5.174l.037 .262a7 7 0 0 1 -3.078 6.693a1 1 0 0 1 -.553 .167h-6.635a1 1 0 0 1 -.552 -.166a7 7 0 0 1 .807 -12.134l.062 -.028v-5.672a1 1 0 1 1 0 -2h6zm-2 2h-2v6.34a1 1 0 0 1 -.551 .894l-.116 .049a5 5 0 0 0 -2.92 2.717h9.172a5 5 0 0 0 -2.918 -2.715a1 1 0 0 1 -.667 -.943v-6.342z" />
    </svg>
  )
);
Flask2Filled.displayName = "Flask2Filled";
export const Flask2FilledMetadata = { 
  id: "flask-2_filled", 
  baseId: "flask-2", 
  variant: "filled", 
  name: "Flask 2", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Flask2Filled;
