/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Columns2FilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Columns2Filled = React.forwardRef<SVGSVGElement, Columns2FilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4 2h6a1 1 0 0 1 1 1v18a1 1 0 0 1 -1 1h-6a2 2 0 0 1 -2 -2v-16a2 2 0 0 1 2 -2" />
  <path d="M14 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-6a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1" />
    </svg>
  )
);
Columns2Filled.displayName = "Columns2Filled";
export const Columns2FilledMetadata = { id: "columns-2_filled", baseId: "columns-2", variant: "filled", name: "Columns 2", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default Columns2Filled;
