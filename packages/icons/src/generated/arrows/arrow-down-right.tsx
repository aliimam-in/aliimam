/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ArrowDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowDownRight = React.forwardRef<SVGSVGElement, ArrowDownRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m7 7 10 10" />
  <path d="M17 7v10H7" />
    </svg>
  )
);
ArrowDownRight.displayName = "ArrowDownRight";
export const ArrowDownRightMetadata = { id: "arrow-down-right", baseId: "arrow-down-right", variant: "default", name: "Arrow Down Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default ArrowDownRight;
