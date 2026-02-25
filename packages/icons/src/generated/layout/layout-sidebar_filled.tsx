/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutSidebarFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutSidebarFilled = React.forwardRef<SVGSVGElement, LayoutSidebarFilledProps>(
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
      <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm12 -16h-8v14h8a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1" />
    </svg>
  )
);
LayoutSidebarFilled.displayName = "LayoutSidebarFilled";
export const LayoutSidebarFilledMetadata = { 
  id: "layout-sidebar_filled", 
  baseId: "layout-sidebar", 
  variant: "filled", 
  name: "Layout Sidebar", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutSidebarFilled;
