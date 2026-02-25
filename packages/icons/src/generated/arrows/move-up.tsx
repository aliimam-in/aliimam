/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveUp = React.forwardRef<SVGSVGElement, MoveUpProps>(
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
      <path d="M8 6L12 2L16 6" />
  <path d="M12 2V22" />
    </svg>
  )
);
MoveUp.displayName = "MoveUp";
export const MoveUpMetadata = { 
  id: "move-up", 
  baseId: "move-up", 
  variant: "default", 
  name: "Move Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveUp;
