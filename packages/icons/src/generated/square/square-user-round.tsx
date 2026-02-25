/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareUserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareUserRound = React.forwardRef<SVGSVGElement, SquareUserRoundProps>(
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
      <path d="M18 21a6 6 0 0 0-12 0" />
  <circle cx="12" cy="11" r="4" />
  <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  )
);
SquareUserRound.displayName = "SquareUserRound";
export const SquareUserRoundMetadata = { 
  id: "square-user-round", 
  baseId: "square-user-round", 
  variant: "default", 
  name: "Square User Round", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareUserRound;
