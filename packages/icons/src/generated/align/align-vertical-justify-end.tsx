/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AlignVerticalJustifyEndProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlignVerticalJustifyEnd = React.forwardRef<SVGSVGElement, AlignVerticalJustifyEndProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <rect width="14" height="6" x="5" y="12" rx="2" />
  <rect width="10" height="6" x="7" y="2" rx="2" />
  <path d="M2 22h20" />
    </svg>
  )
);
AlignVerticalJustifyEnd.displayName = "AlignVerticalJustifyEnd";
export const AlignVerticalJustifyEndMetadata = { id: "align-vertical-justify-end", baseId: "align-vertical-justify-end", variant: "default", name: "Align Vertical Justify End", category: "align", tags: [], viewBox: "0 0 24 24" } as const;
export default AlignVerticalJustifyEnd;
