/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsDown = React.forwardRef<SVGSVGElement, ChevronsDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m7 6 5 5 5-5" />
  <path d="m7 13 5 5 5-5" />
    </svg>
  )
);
ChevronsDown.displayName = "ChevronsDown";
export const ChevronsDownMetadata = { id: "chevrons-down", baseId: "chevrons-down", variant: "default", name: "Chevrons Down", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ChevronsDown;
