/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SidebarTopRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SidebarTopRounded = React.forwardRef<SVGSVGElement, SidebarTopRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 8.5H2" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.56 15.5L12 12.94L9.44 15.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SidebarTopRounded.displayName = "SidebarTopRounded";
export const SidebarTopRoundedMetadata = { 
  id: "sidebar-top_rounded", 
  baseId: "sidebar-top", 
  variant: "rounded", 
  name: "Sidebar Top", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SidebarTopRounded;
