/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsLeftRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsLeftRight = React.forwardRef<SVGSVGElement, ChevronsLeftRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m9 7-5 5 5 5" />
  <path d="m15 7 5 5-5 5" />
    </svg>
  )
);
ChevronsLeftRight.displayName = "ChevronsLeftRight";
export const ChevronsLeftRightMetadata = { id: "chevrons-left-right", baseId: "chevrons-left-right", variant: "default", name: "Chevrons Left Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ChevronsLeftRight;
