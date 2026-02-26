/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveDiagonal2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveDiagonal2 = React.forwardRef<SVGSVGElement, MoveDiagonal2Props>(
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
      <path d="M19 13v6h-6" />
  <path d="M5 11V5h6" />
  <path d="m5 5 14 14" />
    </svg>
  )
);
MoveDiagonal2.displayName = "MoveDiagonal2";
export const MoveDiagonal2Metadata = { 
  id: "move-diagonal-2", 
  baseId: "move-diagonal-2", 
  variant: "default", 
  name: "Move Diagonal 2", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveDiagonal2;
