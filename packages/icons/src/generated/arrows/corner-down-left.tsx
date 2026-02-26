/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CornerDownLeft = React.forwardRef<SVGSVGElement, CornerDownLeftProps>(
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
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
  <path d="m9 10-5 5 5 5" />
    </svg>
  )
);
CornerDownLeft.displayName = "CornerDownLeft";
export const CornerDownLeftMetadata = { 
  id: "corner-down-left", 
  baseId: "corner-down-left", 
  variant: "default", 
  name: "Corner Down Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CornerDownLeft;
