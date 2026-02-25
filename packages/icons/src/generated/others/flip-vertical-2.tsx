/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlipVertical2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlipVertical2 = React.forwardRef<SVGSVGElement, FlipVertical2Props>(
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
      <path d="m17 3-5 5-5-5h10" />
  <path d="m17 21-5-5-5 5h10" />
  <path d="M4 12H2" />
  <path d="M10 12H8" />
  <path d="M16 12h-2" />
  <path d="M22 12h-2" />
    </svg>
  )
);
FlipVertical2.displayName = "FlipVertical2";
export const FlipVertical2Metadata = { 
  id: "flip-vertical-2", 
  baseId: "flip-vertical-2", 
  variant: "default", 
  name: "Flip Vertical 2", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlipVertical2;
