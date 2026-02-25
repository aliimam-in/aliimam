/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CirclePauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CirclePause = React.forwardRef<SVGSVGElement, CirclePauseProps>(
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
      <circle cx="12" cy="12" r="10" />
  <line x1="10" x2="10" y1="15" y2="9" />
  <line x1="14" x2="14" y1="15" y2="9" />
    </svg>
  )
);
CirclePause.displayName = "CirclePause";
export const CirclePauseMetadata = { 
  id: "circle-pause", 
  baseId: "circle-pause", 
  variant: "default", 
  name: "Circle Pause", 
  category: "circle", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CirclePause;
