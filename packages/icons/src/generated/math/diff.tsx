/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Diff = React.forwardRef<SVGSVGElement, DiffProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 3v14" />
  <path d="M5 10h14" />
  <path d="M5 21h14" />
    </svg>
  )
);
Diff.displayName = "Diff";
export const DiffMetadata = { id: "diff", baseId: "diff", variant: "default", name: "Diff", category: "math", tags: [], viewBox: "0 0 24 24" } as const;
export default Diff;
