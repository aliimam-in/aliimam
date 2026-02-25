/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Undo2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Undo2 = React.forwardRef<SVGSVGElement, Undo2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M9 14 4 9l5-5" />
  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
    </svg>
  )
);
Undo2.displayName = "Undo2";
export const Undo2Metadata = { id: "undo-2", baseId: "undo-2", variant: "default", name: "Undo 2", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default Undo2;
