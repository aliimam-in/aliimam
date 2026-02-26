/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutDistributeVerticalFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutDistributeVerticalFilled = React.forwardRef<SVGSVGElement, LayoutDistributeVerticalFilledProps>(
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
      <path d="M4 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" />
  <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1 -2 0v-16a1 1 0 0 1 1 -1" />
  <path d="M13 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutDistributeVerticalFilled.displayName = "LayoutDistributeVerticalFilled";
export const LayoutDistributeVerticalFilledMetadata = { 
  id: "layout-distribute-vertical_filled", 
  baseId: "layout-distribute-vertical", 
  variant: "filled", 
  name: "Layout Distribute Vertical", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutDistributeVerticalFilled;
