/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquaresUniteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquaresUnite = React.forwardRef<SVGSVGElement, SquaresUniteProps>(
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
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" />
    </svg>
  )
);
SquaresUnite.displayName = "SquaresUnite";
export const SquaresUniteMetadata = { 
  id: "squares-unite", 
  baseId: "squares-unite", 
  variant: "default", 
  name: "Squares Unite", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquaresUnite;
