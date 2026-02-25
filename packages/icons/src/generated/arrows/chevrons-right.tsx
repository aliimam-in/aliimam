/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsRight = React.forwardRef<SVGSVGElement, ChevronsRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m6 17 5-5-5-5" />
  <path d="m13 17 5-5-5-5" />
    </svg>
  )
);
ChevronsRight.displayName = "ChevronsRight";
export const ChevronsRightMetadata = { id: "chevrons-right", baseId: "chevrons-right", variant: "default", name: "Chevrons Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ChevronsRight;
