/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveUpRight = React.forwardRef<SVGSVGElement, MoveUpRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 5H19V11" />
  <path d="M19 5L5 19" />
    </svg>
  )
);
MoveUpRight.displayName = "MoveUpRight";
export const MoveUpRightMetadata = { id: "move-up-right", baseId: "move-up-right", variant: "default", name: "Move Up Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default MoveUpRight;
