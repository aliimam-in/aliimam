/**
 * Auto-generated logo component: Browser Maximize Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrowserMaximizeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrowserMaximizeOutlineLogo = React.forwardRef<SVGSVGElement, BrowserMaximizeOutlineLogoProps>(
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
      <path d="M4 8h8" />
  <path d="M20 11.5v6.5a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6.5" />
  <path d="M8 4v4" />
  <path d="M16 8l5 -5" />
  <path d="M21 7.5v-4.5h-4.5" />
    </svg>
  )
);

BrowserMaximizeOutlineLogo.displayName = "BrowserMaximizeOutlineLogo";

export const BrowserMaximizeOutlineLogoMetadata = {
  id: "browser-maximize-outline",
  baseId: "browser-maximize-outline",
  variant: "default",
  name: "Browser Maximize Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrowserMaximizeOutlineLogo;
