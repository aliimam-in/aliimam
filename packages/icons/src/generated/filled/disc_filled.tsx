/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiscFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiscFilled = React.forwardRef<SVGSVGElement, DiscFilledProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m0 7.66a1 1 0 0 0 -1 1a4 4 0 0 1 -4 4a1 1 0 0 0 0 2a6 6 0 0 0 6 -6a1 1 0 0 0 -1 -1m-5 -1a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -4a6 6 0 0 0 -6 6a1 1 0 0 0 2 0a4 4 0 0 1 4 -4a1 1 0 0 0 0 -2" />
    </svg>
  )
);
DiscFilled.displayName = "DiscFilled";
export const DiscFilledMetadata = { 
  id: "disc_filled", 
  baseId: "disc", 
  variant: "filled", 
  name: "Disc", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiscFilled;
