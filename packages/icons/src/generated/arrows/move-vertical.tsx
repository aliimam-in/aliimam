/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveVertical = React.forwardRef<SVGSVGElement, MoveVerticalProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2v20" />
  <path d="m8 18 4 4 4-4" />
  <path d="m8 6 4-4 4 4" />
    </svg>
  )
);
MoveVertical.displayName = "MoveVertical";
export const MoveVerticalMetadata = { id: "move-vertical", baseId: "move-vertical", variant: "default", name: "Move Vertical", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default MoveVertical;
