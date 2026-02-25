/**
 * Auto-generated logo component: Graph Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GraphOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GraphOutlineLogo = React.forwardRef<SVGSVGElement, GraphOutlineLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2" />
  <path d="M7 14l3 -3l2 2l3 -3l2 2" />
    </svg>
  )
);

GraphOutlineLogo.displayName = "GraphOutlineLogo";

export const GraphOutlineLogoMetadata = {
  id: "graph-outline",
  baseId: "graph-outline",
  variant: "default",
  name: "Graph Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GraphOutlineLogo;
