/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveDown = React.forwardRef<SVGSVGElement, MoveDownProps>(
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
      <path d="M8 18L12 22L16 18" />
  <path d="M12 2V22" />
    </svg>
  )
);
MoveDown.displayName = "MoveDown";
export const MoveDownMetadata = { 
  id: "move-down", 
  baseId: "move-down", 
  variant: "default", 
  name: "Move Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveDown;
