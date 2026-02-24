/**
 * Auto-generated logo component: Tablet (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TabletLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TabletLogo = React.forwardRef<SVGSVGElement, TabletLogoProps>(
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
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  )
);

TabletLogo.displayName = "TabletLogo";

export const TabletLogoMetadata = {
  id: "tablet",
  baseId: "tablet",
  variant: "default",
  name: "Tablet",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TabletLogo;
