/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampWallUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampWallUp = React.forwardRef<SVGSVGElement, LampWallUpProps>(
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
      <path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" />
  <path d="M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
  <path d="M8 18h4a2 2 0 0 0 2-2v-5" />
    </svg>
  )
);
LampWallUp.displayName = "LampWallUp";
export const LampWallUpMetadata = { 
  id: "lamp-wall-up", 
  baseId: "lamp-wall-up", 
  variant: "default", 
  name: "Lamp Wall Up", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampWallUp;
