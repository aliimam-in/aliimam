/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquirrelProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Squirrel = React.forwardRef<SVGSVGElement, SquirrelProps>(
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
      <path d="M15.236 22a3 3 0 0 0-2.2-5" />
  <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
  <path d="M18 13h.01" />
  <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
    </svg>
  )
);
Squirrel.displayName = "Squirrel";
export const SquirrelMetadata = { 
  id: "squirrel", 
  baseId: "squirrel", 
  variant: "default", 
  name: "Squirrel", 
  category: "animal", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Squirrel;
