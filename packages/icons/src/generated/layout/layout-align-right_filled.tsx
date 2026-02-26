/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutAlignRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutAlignRightFilled = React.forwardRef<SVGSVGElement, LayoutAlignRightFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" />
  <path d="M14 8a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutAlignRightFilled.displayName = "LayoutAlignRightFilled";
export const LayoutAlignRightFilledMetadata = { 
  id: "layout-align-right_filled", 
  baseId: "layout-align-right", 
  variant: "filled", 
  name: "Layout Align Right", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutAlignRightFilled;
