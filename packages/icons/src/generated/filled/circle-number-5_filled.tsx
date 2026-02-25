/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CircleNumber5FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CircleNumber5Filled = React.forwardRef<SVGSVGElement, CircleNumber5FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10zm2 5h-4a1 1 0 0 0 -.993 .883l-.007 .117v4a1 1 0 0 0 .883 .993l.117 .007h3v2h-2l-.007 -.117a1 1 0 0 0 -1.993 .117a2 2 0 0 0 1.85 1.995l.15 .005h2a2 2 0 0 0 1.995 -1.85l.005 -.15v-2a2 2 0 0 0 -1.85 -1.995l-.15 -.005h-2v-2h3a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -.883 -.993l-.117 -.007z" />
    </svg>
  )
);
CircleNumber5Filled.displayName = "CircleNumber5Filled";
export const CircleNumber5FilledMetadata = { id: "circle-number-5_filled", baseId: "circle-number-5", variant: "filled", name: "Circle Number 5", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default CircleNumber5Filled;
