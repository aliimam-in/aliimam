/**
 * Auto-generated logo component: App Window (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AppWindowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AppWindowLogo = React.forwardRef<SVGSVGElement, AppWindowLogoProps>(
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />
    </svg>
  )
);

AppWindowLogo.displayName = "AppWindowLogo";

export const AppWindowLogoMetadata = {
  id: "app-window",
  baseId: "app-window",
  variant: "default",
  name: "App Window",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AppWindowLogo;
