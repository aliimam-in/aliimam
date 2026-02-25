/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CornerRightUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CornerRightUp = React.forwardRef<SVGSVGElement, CornerRightUpProps>(
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
      <path d="m10 9 5-5 5 5" />
  <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </svg>
  )
);
CornerRightUp.displayName = "CornerRightUp";
export const CornerRightUpMetadata = { 
  id: "corner-right-up", 
  baseId: "corner-right-up", 
  variant: "default", 
  name: "Corner Right Up", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CornerRightUp;
