/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BombProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bomb = React.forwardRef<SVGSVGElement, BombProps>(
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
      <circle cx="11" cy="13" r="9" />
  <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
  <path d="m22 2-1.5 1.5" />
    </svg>
  )
);
Bomb.displayName = "Bomb";
export const BombMetadata = { 
  id: "bomb", 
  baseId: "bomb", 
  variant: "default", 
  name: "Bomb", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Bomb;
