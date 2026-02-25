/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowLeftToLineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowLeftToLine = React.forwardRef<SVGSVGElement, ArrowLeftToLineProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M3 19V5" />
  <path d="m13 6-6 6 6 6" />
  <path d="M7 12h14" />
    </svg>
  )
);
ArrowLeftToLine.displayName = "ArrowLeftToLine";
export const ArrowLeftToLineMetadata = { id: "arrow-left-to-line", baseId: "arrow-left-to-line", variant: "default", name: "Arrow Left To Line", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowLeftToLine;
