/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SeparatorHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SeparatorHorizontal = React.forwardRef<SVGSVGElement, SeparatorHorizontalProps>(
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
      <path d="m16 16-4 4-4-4" />
  <path d="M3 12h18" />
  <path d="m8 8 4-4 4 4" />
    </svg>
  )
);
SeparatorHorizontal.displayName = "SeparatorHorizontal";
export const SeparatorHorizontalMetadata = { 
  id: "separator-horizontal", 
  baseId: "separator-horizontal", 
  variant: "default", 
  name: "Separator Horizontal", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SeparatorHorizontal;
