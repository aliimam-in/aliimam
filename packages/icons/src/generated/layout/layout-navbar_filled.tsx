/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LayoutNavbarFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LayoutNavbarFilled = React.forwardRef<SVGSVGElement, LayoutNavbarFilledProps>(
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
      <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9z" />
    </svg>
  )
);
LayoutNavbarFilled.displayName = "LayoutNavbarFilled";
export const LayoutNavbarFilledMetadata = { 
  id: "layout-navbar_filled", 
  baseId: "layout-navbar", 
  variant: "filled", 
  name: "Layout Navbar", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LayoutNavbarFilled;
