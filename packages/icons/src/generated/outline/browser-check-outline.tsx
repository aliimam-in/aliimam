/**
 * Auto-generated logo component: Browser Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrowserCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrowserCheckOutlineLogo = React.forwardRef<SVGSVGElement, BrowserCheckOutlineLogoProps>(
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
  <path d="M9.5 14.5l1.5 1.5l3 -3" />
    </svg>
  )
);

BrowserCheckOutlineLogo.displayName = "BrowserCheckOutlineLogo";

export const BrowserCheckOutlineLogoMetadata = {
  id: "browser-check-outline",
  baseId: "browser-check-outline",
  variant: "default",
  name: "Browser Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrowserCheckOutlineLogo;
