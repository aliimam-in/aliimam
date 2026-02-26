/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePileProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePile = React.forwardRef<SVGSVGElement, CirclePileProps>(
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
      <circle cx="12" cy="19" r="2" />
  <circle cx="12" cy="5" r="2" />
  <circle cx="16" cy="12" r="2" />
  <circle cx="20" cy="19" r="2" />
  <circle cx="4" cy="19" r="2" />
  <circle cx="8" cy="12" r="2" />
    </svg>
  )
);
CirclePile.displayName = "CirclePile";
export const CirclePileMetadata = { 
  id: "circle-pile", 
  baseId: "circle-pile", 
  variant: "default", 
  name: "Circle Pile", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CirclePile;
