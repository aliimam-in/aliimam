/**
 * Auto-generated logo component: Window Minimize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindowMinimizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindowMinimizeOutlineLogo = React.forwardRef<SVGSVGElement, WindowMinimizeOutlineLogoProps>(
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
      <path d="M3 17a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1l0 -3" />
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" />
  <path d="M15 13h-4v-4" />
  <path d="M11 13l5 -5" />
    </svg>
  )
);

WindowMinimizeOutlineLogo.displayName = "WindowMinimizeOutlineLogo";

export const WindowMinimizeOutlineLogoMetadata = {
  id: "window-minimize-outline",
  baseId: "window-minimize-outline",
  variant: "default",
  name: "Window Minimize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindowMinimizeOutlineLogo;
