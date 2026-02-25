/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleNumber0FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleNumber0Filled = React.forwardRef<SVGSVGElement, CircleNumber0FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm0 5a3 3 0 0 0 -2.995 2.824l-.005 .176v4l.005 .176a3 3 0 0 0 5.99 0l.005 -.176v-4l-.005 -.176a3 3 0 0 0 -2.995 -2.824zm0 2a1 1 0 0 1 .993 .883l.007 .117v4l-.007 .117a1 1 0 0 1 -1.986 0l-.007 -.117v-4l.007 -.117a1 1 0 0 1 .993 -.883z" />
    </svg>
  )
);
CircleNumber0Filled.displayName = "CircleNumber0Filled";
export const CircleNumber0FilledMetadata = { id: "circle-number-0_filled", baseId: "circle-number-0", variant: "filled", name: "Circle Number 0", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleNumber0Filled;
