/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UndoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Undo = React.forwardRef<SVGSVGElement, UndoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 7v6h6" />
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
);
Undo.displayName = "Undo";
export const UndoMetadata = { id: "undo", baseId: "undo", variant: "default", name: "Undo", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default Undo;
