/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveDownLeft = React.forwardRef<SVGSVGElement, MoveDownLeftProps>(
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
      <path d="M11 19H5V13" />
  <path d="M19 5L5 19" />
    </svg>
  )
);
MoveDownLeft.displayName = "MoveDownLeft";
export const MoveDownLeftMetadata = { 
  id: "move-down-left", 
  baseId: "move-down-left", 
  variant: "default", 
  name: "Move Down Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveDownLeft;
