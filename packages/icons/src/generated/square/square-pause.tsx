/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SquarePauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SquarePause = React.forwardRef<SVGSVGElement, SquarePauseProps>(
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
  <line x1="10" x2="10" y1="15" y2="9" />
  <line x1="14" x2="14" y1="15" y2="9" />
    </svg>
  )
);
SquarePause.displayName = "SquarePause";
export const SquarePauseMetadata = { 
  id: "square-pause", 
  baseId: "square-pause", 
  variant: "default", 
  name: "Square Pause", 
  category: "square", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SquarePause;
