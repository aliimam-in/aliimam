/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Move = React.forwardRef<SVGSVGElement, MoveProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 2v20" />
  <path d="m15 19-3 3-3-3" />
  <path d="m19 9 3 3-3 3" />
  <path d="M2 12h20" />
  <path d="m5 9-3 3 3 3" />
  <path d="m9 5 3-3 3 3" />
    </svg>
  )
);
Move.displayName = "Move";
export const MoveMetadata = { id: "move", baseId: "move", variant: "default", name: "Move", category: "arrows", tags: [], viewBox: "0 0 24 24" } as const;
export default Move;
