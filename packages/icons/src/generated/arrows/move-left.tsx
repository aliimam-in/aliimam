/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveLeft = React.forwardRef<SVGSVGElement, MoveLeftProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M6 8L2 12L6 16" />
  <path d="M2 12H22" />
    </svg>
  )
);
MoveLeft.displayName = "MoveLeft";
export const MoveLeftMetadata = { id: "move-left", baseId: "move-left", variant: "default", name: "Move Left", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default MoveLeft;
