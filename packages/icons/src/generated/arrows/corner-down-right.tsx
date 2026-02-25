/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CornerDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CornerDownRight = React.forwardRef<SVGSVGElement, CornerDownRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="m15 10 5 5-5 5" />
  <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </svg>
  )
);
CornerDownRight.displayName = "CornerDownRight";
export const CornerDownRightMetadata = { id: "corner-down-right", baseId: "corner-down-right", variant: "default", name: "Corner Down Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default CornerDownRight;
