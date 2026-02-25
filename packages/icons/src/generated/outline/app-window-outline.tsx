/**
 * Auto-generated logo component: App Window Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AppWindowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AppWindowOutlineLogo = React.forwardRef<SVGSVGElement, AppWindowOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M6 8h.01" />
  <path d="M9 8h.01" />
    </svg>
  )
);

AppWindowOutlineLogo.displayName = "AppWindowOutlineLogo";

export const AppWindowOutlineLogoMetadata = {
  id: "app-window-outline",
  baseId: "app-window-outline",
  variant: "default",
  name: "App Window Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AppWindowOutlineLogo;
