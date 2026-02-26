/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutNavbarExpandFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutNavbarExpandFilled = React.forwardRef<SVGSVGElement, LayoutNavbarExpandFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9zm-8.387 3.21l.094 .083l1.293 1.292l1.293 -1.292a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497z" />
    </svg>
  )
);
LayoutNavbarExpandFilled.displayName = "LayoutNavbarExpandFilled";
export const LayoutNavbarExpandFilledMetadata = { 
  id: "layout-navbar-expand_filled", 
  baseId: "layout-navbar-expand", 
  variant: "filled", 
  name: "Layout Navbar Expand", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutNavbarExpandFilled;
