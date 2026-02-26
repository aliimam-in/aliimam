/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ToyBrickProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ToyBrick = React.forwardRef<SVGSVGElement, ToyBrickProps>(
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
      <rect width="18" height="12" x="3" y="8" rx="1" />
  <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
  <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </svg>
  )
);
ToyBrick.displayName = "ToyBrick";
export const ToyBrickMetadata = { 
  id: "toy-brick", 
  baseId: "toy-brick", 
  variant: "default", 
  name: "Toy Brick", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ToyBrick;
