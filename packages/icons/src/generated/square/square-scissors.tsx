/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareScissorsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareScissors = React.forwardRef<SVGSVGElement, SquareScissorsProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <circle cx="8.5" cy="8.5" r="1.5" />
  <line x1="9.56066" y1="9.56066" x2="12" y2="12" />
  <line x1="17" y1="17" x2="14.82" y2="14.82" />
  <circle cx="8.5" cy="15.5" r="1.5" />
  <line x1="9.56066" y1="14.43934" x2="17" y2="7" />
    </svg>
  )
);
SquareScissors.displayName = "SquareScissors";
export const SquareScissorsMetadata = { 
  id: "square-scissors", 
  baseId: "square-scissors", 
  variant: "default", 
  name: "Square Scissors", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareScissors;
