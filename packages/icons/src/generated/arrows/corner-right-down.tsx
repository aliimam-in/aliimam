/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CornerRightDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CornerRightDown = React.forwardRef<SVGSVGElement, CornerRightDownProps>(
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
      <path d="m10 15 5 5 5-5" />
  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  )
);
CornerRightDown.displayName = "CornerRightDown";
export const CornerRightDownMetadata = { 
  id: "corner-right-down", 
  baseId: "corner-right-down", 
  variant: "default", 
  name: "Corner Right Down", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CornerRightDown;
