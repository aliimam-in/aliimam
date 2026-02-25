/**
 * Auto-generated logo component: Screenshot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScreenshotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScreenshotOutlineLogo = React.forwardRef<SVGSVGElement, ScreenshotOutlineLogoProps>(
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
      <path d="M7 19a2 2 0 0 1 -2 -2" />
  <path d="M5 13v-2" />
  <path d="M5 7a2 2 0 0 1 2 -2" />
  <path d="M11 5h2" />
  <path d="M17 5a2 2 0 0 1 2 2" />
  <path d="M19 11v2" />
  <path d="M19 17v4" />
  <path d="M21 19h-4" />
  <path d="M13 19h-2" />
    </svg>
  )
);

ScreenshotOutlineLogo.displayName = "ScreenshotOutlineLogo";

export const ScreenshotOutlineLogoMetadata = {
  id: "screenshot-outline",
  baseId: "screenshot-outline",
  variant: "default",
  name: "Screenshot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScreenshotOutlineLogo;
