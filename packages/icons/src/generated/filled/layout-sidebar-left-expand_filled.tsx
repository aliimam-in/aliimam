/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutSidebarLeftExpandFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutSidebarLeftExpandFilled = React.forwardRef<SVGSVGElement, LayoutSidebarLeftExpandFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
    </svg>
  )
);
LayoutSidebarLeftExpandFilled.displayName = "LayoutSidebarLeftExpandFilled";
export const LayoutSidebarLeftExpandFilledMetadata = { id: "layout-sidebar-left-expand_filled", baseId: "layout-sidebar-left-expand", variant: "filled", name: "Layout Sidebar Left Expand", category: "filled", tags: [], viewBox: "0 0 24 24" } as const;
export default LayoutSidebarLeftExpandFilled;
