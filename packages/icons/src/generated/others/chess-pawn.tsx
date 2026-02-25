/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessPawnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessPawn = React.forwardRef<SVGSVGElement, ChessPawnProps>(
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
  <path d="m14.5 10 1.5 8" />
  <path d="M7 10h10" />
  <path d="m8 18 1.5-8" />
  <circle cx="12" cy="6" r="4" />
    </svg>
  )
);
ChessPawn.displayName = "ChessPawn";
export const ChessPawnMetadata = { 
  id: "chess-pawn", 
  baseId: "chess-pawn", 
  variant: "default", 
  name: "Chess Pawn", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChessPawn;
