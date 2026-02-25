/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveRight = React.forwardRef<SVGSVGElement, MoveRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 8L22 12L18 16" />
  <path d="M2 12H22" />
    </svg>
  )
);
MoveRight.displayName = "MoveRight";
export const MoveRightMetadata = { id: "move-right", baseId: "move-right", variant: "default", name: "Move Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default MoveRight;
