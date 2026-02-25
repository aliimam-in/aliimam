/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareNumber7FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareNumber7Filled = React.forwardRef<SVGSVGElement, SquareNumber7FilledProps>(
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-4.333 5h-4l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117l.007 .117a1 1 0 0 0 .876 .876l.117 .007h2.718l-1.688 6.757l-.022 .115a1 1 0 0 0 1.927 .482l.035 -.111l2 -8l.021 -.112a1 1 0 0 0 -.878 -1.125l-.113 -.006z" />
    </svg>
  )
);
SquareNumber7Filled.displayName = "SquareNumber7Filled";
export const SquareNumber7FilledMetadata = { 
  id: "square-number-7_filled", 
  baseId: "square-number-7", 
  variant: "filled", 
  name: "Square Number 7", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareNumber7Filled;
