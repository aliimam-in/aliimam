/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessBishopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessBishop = React.forwardRef<SVGSVGElement, ChessBishopProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
  <path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" />
  <path d="m16 7-2.5 2.5" />
  <path d="M9 2h6" />
    </svg>
  )
);
ChessBishop.displayName = "ChessBishop";
export const ChessBishopMetadata = { id: "chess-bishop", baseId: "chess-bishop", variant: "default", name: "Chess Bishop", category: "others", tags: [], viewBox: "0 0 24 24" } as const;
export default ChessBishop;
