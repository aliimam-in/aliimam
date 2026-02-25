/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChessKnightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChessKnightFilled = React.forwardRef<SVGSVGElement, ChessKnightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M8.959 1.99l-.147 .028l-.115 .029a1 1 0 0 0 -.646 1.27l.749 2.245l-2.815 1.735a2 2 0 0 0 -.655 2.751l.089 .133a2 2 0 0 0 1.614 .819l1.563 -.001l-1.614 4.674a1 1 0 0 0 .945 1.327h7.961a1 1 0 0 0 1 -.978l.112 -5c0 -3.827 -1.555 -6.878 -4.67 -7.966l-2.399 -.83l-.375 -.121l-.258 -.074l-.135 -.031l-.101 -.013l-.055 -.001l-.048 .003z" />
  <path d="M18 18h-12a1 1 0 0 0 -1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987 -1.768l.011 -.174a1 1 0 0 0 -.998 -1.058z" />
    </svg>
  )
);
ChessKnightFilled.displayName = "ChessKnightFilled";
export const ChessKnightFilledMetadata = { 
  id: "chess-knight_filled", 
  baseId: "chess-knight", 
  variant: "filled", 
  name: "Chess Knight", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChessKnightFilled;
