/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessRookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessRook = React.forwardRef<SVGSVGElement, ChessRookProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
  <path d="M10 2v2" />
  <path d="M14 2v2" />
  <path d="m17 18-1-9" />
  <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
  <path d="M6 4h12" />
  <path d="m7 18 1-9" />
    </svg>
  )
);
ChessRook.displayName = "ChessRook";
export const ChessRookMetadata = { 
  id: "chess-rook", 
  baseId: "chess-rook", 
  variant: "default", 
  name: "Chess Rook", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChessRook;
