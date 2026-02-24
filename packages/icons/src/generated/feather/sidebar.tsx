/**
 * Auto-generated logo component: Sidebar (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SidebarLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SidebarLogo = React.forwardRef<SVGSVGElement, SidebarLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>
    </svg>
  )
);

SidebarLogo.displayName = "SidebarLogo";

export const SidebarLogoMetadata = {
  id: "sidebar",
  baseId: "sidebar",
  variant: "default",
  name: "Sidebar",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SidebarLogo;
