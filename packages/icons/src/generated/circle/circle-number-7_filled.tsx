/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleNumber7FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleNumber7Filled = React.forwardRef<SVGSVGElement, CircleNumber7FilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5h-4l-.117 .007a1 1 0 0 0 -.876 .876l-.007 .117l.007 .117a1 1 0 0 0 .876 .876l.117 .007h2.718l-1.688 6.757l-.022 .115a1 1 0 0 0 1.927 .482l.035 -.111l2 -8l.021 -.112a1 1 0 0 0 -.878 -1.125l-.113 -.006z" />
    </svg>
  )
);
CircleNumber7Filled.displayName = "CircleNumber7Filled";
export const CircleNumber7FilledMetadata = { 
  id: "circle-number-7_filled", 
  baseId: "circle-number-7", 
  variant: "filled", 
  name: "Circle Number 7", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleNumber7Filled;
