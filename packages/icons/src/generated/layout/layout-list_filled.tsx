/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutListFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutListFilled = React.forwardRef<SVGSVGElement, LayoutListFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
  <path d="M18 13a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3z" />
    </svg>
  )
);
LayoutListFilled.displayName = "LayoutListFilled";
export const LayoutListFilledMetadata = { 
  id: "layout-list_filled", 
  baseId: "layout-list", 
  variant: "filled", 
  name: "Layout List", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutListFilled;
