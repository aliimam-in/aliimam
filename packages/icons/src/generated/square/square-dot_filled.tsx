/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquareDotFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquareDotFilled = React.forwardRef<SVGSVGElement, SquareDotFilledProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 8a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 1 0 1.995 -2.15z" />
    </svg>
  )
);
SquareDotFilled.displayName = "SquareDotFilled";
export const SquareDotFilledMetadata = { 
  id: "square-dot_filled", 
  baseId: "square-dot", 
  variant: "filled", 
  name: "Square Dot", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquareDotFilled;
