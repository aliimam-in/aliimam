/**
 * Auto-generated logo component: Browser X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrowserXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrowserXOutlineLogo = React.forwardRef<SVGSVGElement, BrowserXOutlineLogoProps>(
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
      <path d="M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M4 8h16" />
  <path d="M8 4v4" />
  <path d="M10 16l4 -4" />
  <path d="M14 16l-4 -4" />
    </svg>
  )
);

BrowserXOutlineLogo.displayName = "BrowserXOutlineLogo";

export const BrowserXOutlineLogoMetadata = {
  id: "browser-x-outline",
  baseId: "browser-x-outline",
  variant: "default",
  name: "Browser X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrowserXOutlineLogo;
