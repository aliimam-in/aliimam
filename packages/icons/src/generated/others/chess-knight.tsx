/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessKnightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessKnight = React.forwardRef<SVGSVGElement, ChessKnightProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
  <path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" />
  <path d="m15 5 1.425-1.425" />
  <path d="m17 8 1.53-1.53" />
  <path d="M9.713 12.185 7 18" />
    </svg>
  )
);
ChessKnight.displayName = "ChessKnight";
export const ChessKnightMetadata = { id: "chess-knight", baseId: "chess-knight", variant: "default", name: "Chess Knight", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ChessKnight;
