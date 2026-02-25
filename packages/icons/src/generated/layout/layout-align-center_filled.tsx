/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutAlignCenterFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutAlignCenterFilled = React.forwardRef<SVGSVGElement, LayoutAlignCenterFilledProps>(
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
      <path d="M12 3a1 1 0 0 1 1 1v4h3a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-3v4a1 1 0 0 1 -2 0v-4h-3a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h3v-4a1 1 0 0 1 1 -1" />
    </svg>
  )
);
LayoutAlignCenterFilled.displayName = "LayoutAlignCenterFilled";
export const LayoutAlignCenterFilledMetadata = { 
  id: "layout-align-center_filled", 
  baseId: "layout-align-center", 
  variant: "filled", 
  name: "Layout Align Center", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutAlignCenterFilled;
