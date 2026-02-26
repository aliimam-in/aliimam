/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutSidebarRightCollapseFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutSidebarRightCollapseFilled = React.forwardRef<SVGSVGElement, LayoutSidebarRightCollapseFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-5.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
    </svg>
  )
);
LayoutSidebarRightCollapseFilled.displayName = "LayoutSidebarRightCollapseFilled";
export const LayoutSidebarRightCollapseFilledMetadata = { 
  id: "layout-sidebar-right-collapse_filled", 
  baseId: "layout-sidebar-right-collapse", 
  variant: "filled", 
  name: "Layout Sidebar Right Collapse", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutSidebarRightCollapseFilled;
