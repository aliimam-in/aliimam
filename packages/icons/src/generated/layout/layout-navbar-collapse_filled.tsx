/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutNavbarCollapseFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutNavbarCollapseFilled = React.forwardRef<SVGSVGElement, LayoutNavbarCollapseFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9zm-6.387 3.21l.094 .083l2 2a1 1 0 0 1 -1.32 1.497l-.094 -.083l-1.293 -1.292l-1.293 1.292a1 1 0 0 1 -1.32 .083l-.094 -.083a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.32 -.083z" />
    </svg>
  )
);
LayoutNavbarCollapseFilled.displayName = "LayoutNavbarCollapseFilled";
export const LayoutNavbarCollapseFilledMetadata = { 
  id: "layout-navbar-collapse_filled", 
  baseId: "layout-navbar-collapse", 
  variant: "filled", 
  name: "Layout Navbar Collapse", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutNavbarCollapseFilled;
