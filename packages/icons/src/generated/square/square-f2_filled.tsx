/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareF2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareF2Filled = React.forwardRef<SVGSVGElement, SquareF2FilledProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-3.333 6h-2l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h2v1h-1l-.15 .005a2 2 0 0 0 -1.844 1.838l-.006 .157v1l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-2v-1h1l.15 -.005a2 2 0 0 0 1.844 -1.838l.006 -.157v-1l-.005 -.15a2 2 0 0 0 -1.995 -1.85zm-5 0h-2l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117v6l.007 .117a1 1 0 0 0 .876 .876l.117 .007l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117v-2h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007h-1v-1h1l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
    </svg>
  )
);
SquareF2Filled.displayName = "SquareF2Filled";
export const SquareF2FilledMetadata = { 
  id: "square-f2_filled", 
  baseId: "square-f2", 
  variant: "filled", 
  name: "Square F2", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareF2Filled;
