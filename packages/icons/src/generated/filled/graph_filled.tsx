/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GraphFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GraphFilled = React.forwardRef<SVGSVGElement, GraphFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12zm-2.293 6.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-2 -2z" />
    </svg>
  )
);
GraphFilled.displayName = "GraphFilled";
export const GraphFilledMetadata = { 
  id: "graph_filled", 
  baseId: "graph", 
  variant: "filled", 
  name: "Graph", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GraphFilled;
