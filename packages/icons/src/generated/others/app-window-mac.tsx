/**
 * Auto-generated logo component: App Window Mac (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AppWindowMacLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AppWindowMacLogo = React.forwardRef<SVGSVGElement, AppWindowMacLogoProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M6 8h.01" />
  <path d="M10 8h.01" />
  <path d="M14 8h.01" />
    </svg>
  )
);

AppWindowMacLogo.displayName = "AppWindowMacLogo";

export const AppWindowMacLogoMetadata = {
  id: "app-window-mac",
  baseId: "app-window-mac",
  variant: "default",
  name: "App Window Mac",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AppWindowMacLogo;
