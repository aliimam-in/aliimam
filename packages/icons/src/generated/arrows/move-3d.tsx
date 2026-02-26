/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Move3dProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Move3d = React.forwardRef<SVGSVGElement, Move3dProps>(
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
      <path d="M5 3v16h16" />
  <path d="m5 19 6-6" />
  <path d="m2 6 3-3 3 3" />
  <path d="m18 16 3 3-3 3" />
    </svg>
  )
);
Move3d.displayName = "Move3d";
export const Move3dMetadata = { 
  id: "move-3d", 
  baseId: "move-3d", 
  variant: "default", 
  name: "Move 3d", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Move3d;
