/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RedoDotProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RedoDot = React.forwardRef<SVGSVGElement, RedoDotProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <circle cx="12" cy="17" r="1" />
  <path d="M21 7v6h-6" />
  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
);
RedoDot.displayName = "RedoDot";
export const RedoDotMetadata = { id: "redo-dot", baseId: "redo-dot", variant: "default", name: "Redo Dot", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default RedoDot;
