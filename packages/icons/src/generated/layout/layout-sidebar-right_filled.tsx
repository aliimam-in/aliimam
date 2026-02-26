/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutSidebarRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutSidebarRightFilled = React.forwardRef<SVGSVGElement, LayoutSidebarRightFilledProps>(
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
      <path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3zm8 -16h-8a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8z" />
    </svg>
  )
);
LayoutSidebarRightFilled.displayName = "LayoutSidebarRightFilled";
export const LayoutSidebarRightFilledMetadata = { 
  id: "layout-sidebar-right_filled", 
  baseId: "layout-sidebar-right", 
  variant: "filled", 
  name: "Layout Sidebar Right", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutSidebarRightFilled;
