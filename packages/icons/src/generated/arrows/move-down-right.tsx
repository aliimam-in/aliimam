/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveDownRight = React.forwardRef<SVGSVGElement, MoveDownRightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M19 13V19H13" />
  <path d="M5 5L19 19" />
    </svg>
  )
);
MoveDownRight.displayName = "MoveDownRight";
export const MoveDownRightMetadata = { id: "move-down-right", baseId: "move-down-right", variant: "default", name: "Move Down Right", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default MoveDownRight;
