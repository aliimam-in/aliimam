/**
 * Auto-generated logo component: Window Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindowOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindowOffOutlineLogo = React.forwardRef<SVGSVGElement, WindowOffOutlineLogoProps>(
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
      <path d="M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158" />
  <path d="M5 13h8m4 0h2" />
  <path d="M12 3v5m0 4v9" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WindowOffOutlineLogo.displayName = "WindowOffOutlineLogo";

export const WindowOffOutlineLogoMetadata = {
  id: "window-off-outline",
  baseId: "window-off-outline",
  variant: "default",
  name: "Window Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindowOffOutlineLogo;
