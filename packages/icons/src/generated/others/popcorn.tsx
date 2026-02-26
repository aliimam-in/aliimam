/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface PopcornProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Popcorn = React.forwardRef<SVGSVGElement, PopcornProps>(
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
      <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
  <path d="M10 22 9 8" />
  <path d="m14 22 1-14" />
  <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
    </svg>
  )
);
Popcorn.displayName = "Popcorn";
export const PopcornMetadata = { 
  id: "popcorn", 
  baseId: "popcorn", 
  variant: "default", 
  name: "Popcorn", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Popcorn;
