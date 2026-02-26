/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleNumber4FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleNumber4Filled = React.forwardRef<SVGSVGElement, CircleNumber4FilledProps>(
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5a1 1 0 0 0 -.993 .883l-.007 .117v3h-2v-3l-.007 -.117a1 1 0 0 0 -1.986 0l-.007 .117v3l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h2v3l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-8l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
    </svg>
  )
);
CircleNumber4Filled.displayName = "CircleNumber4Filled";
export const CircleNumber4FilledMetadata = { 
  id: "circle-number-4_filled", 
  baseId: "circle-number-4", 
  variant: "filled", 
  name: "Circle Number 4", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CircleNumber4Filled;
