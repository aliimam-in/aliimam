/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SidebarLeftRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SidebarLeftRounded = React.forwardRef<SVGSVGElement, SidebarLeftRoundedProps>(
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
      <path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.97 2V22"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.97 9.44L12.41 12L14.97 14.56"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SidebarLeftRounded.displayName = "SidebarLeftRounded";
export const SidebarLeftRoundedMetadata = { 
  id: "sidebar-left_rounded", 
  baseId: "sidebar-left", 
  variant: "rounded", 
  name: "Sidebar Left", 
  category: "code", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SidebarLeftRounded;
