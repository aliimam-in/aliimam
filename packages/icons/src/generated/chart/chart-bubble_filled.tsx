/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChartBubbleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChartBubbleFilled = React.forwardRef<SVGSVGElement, ChartBubbleFilledProps>(
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
      <path d="M6 12a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
  <path d="M16 16a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176a3 3 0 0 1 2.995 -2.824z" />
  <path d="M14.5 2a5.5 5.5 0 1 1 -5.496 5.721l-.004 -.221l.004 -.221a5.5 5.5 0 0 1 5.496 -5.279z" />
    </svg>
  )
);
ChartBubbleFilled.displayName = "ChartBubbleFilled";
export const ChartBubbleFilledMetadata = { 
  id: "chart-bubble_filled", 
  baseId: "chart-bubble", 
  variant: "filled", 
  name: "Chart Bubble", 
  category: "chart", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChartBubbleFilled;
