/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface MoveUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MoveUpLeft = React.forwardRef<SVGSVGElement, MoveUpLeftProps>(
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
      <path d="M5 11V5H11" />
  <path d="M5 5L19 19" />
    </svg>
  )
);
MoveUpLeft.displayName = "MoveUpLeft";
export const MoveUpLeftMetadata = { 
  id: "move-up-left", 
  baseId: "move-up-left", 
  variant: "default", 
  name: "Move Up Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default MoveUpLeft;
