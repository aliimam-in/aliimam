/**
 * Auto-generated logo component: Graph Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GraphOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GraphOffOutlineLogo = React.forwardRef<SVGSVGElement, GraphOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a2 2 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
  <path d="M7 14l3 -3l2 2l.5 -.5m2 -2l.5 -.5l2 2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GraphOffOutlineLogo.displayName = "GraphOffOutlineLogo";

export const GraphOffOutlineLogoMetadata = {
  id: "graph-off-outline",
  baseId: "graph-off-outline",
  variant: "default",
  name: "Graph Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GraphOffOutlineLogo;
