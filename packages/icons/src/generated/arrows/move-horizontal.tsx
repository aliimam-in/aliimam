/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveHorizontal = React.forwardRef<SVGSVGElement, MoveHorizontalProps>(
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
      <path d="m18 8 4 4-4 4" />
  <path d="M2 12h20" />
  <path d="m6 8-4 4 4 4" />
    </svg>
  )
);
MoveHorizontal.displayName = "MoveHorizontal";
export const MoveHorizontalMetadata = { 
  id: "move-horizontal", 
  baseId: "move-horizontal", 
  variant: "default", 
  name: "Move Horizontal", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveHorizontal;
