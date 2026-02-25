/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessKingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessKing = React.forwardRef<SVGSVGElement, ChessKingProps>(
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
      <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
  <path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" />
  <path d="M10 4h4" />
  <path d="M12 2v6.818" />
    </svg>
  )
);
ChessKing.displayName = "ChessKing";
export const ChessKingMetadata = { 
  id: "chess-king", 
  baseId: "chess-king", 
  variant: "default", 
  name: "Chess King", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChessKing;
