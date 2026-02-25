/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutBoardFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutBoardFilled = React.forwardRef<SVGSVGElement, LayoutBoardFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 3h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2" />
  <path d="M14 3h5a2 2 0 0 1 2 2v8a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1" />
  <path d="M14 16h6a1 1 0 0 1 1 1v2a2 2 0 0 1 -2 2h-5a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
  <path d="M4 10h6a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1h-5a2 2 0 0 1 -2 -2v-8a1 1 0 0 1 1 -1" />
    </svg>
  )
);
LayoutBoardFilled.displayName = "LayoutBoardFilled";
export const LayoutBoardFilledMetadata = { id: "layout-board_filled", baseId: "layout-board", variant: "filled", name: "Layout Board", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutBoardFilled;
