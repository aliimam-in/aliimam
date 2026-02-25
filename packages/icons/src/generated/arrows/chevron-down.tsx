/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronDown = React.forwardRef<SVGSVGElement, ChevronDownProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
);
ChevronDown.displayName = "ChevronDown";
export const ChevronDownMetadata = { id: "chevron-down", baseId: "chevron-down", variant: "default", name: "Chevron Down", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ChevronDown;
