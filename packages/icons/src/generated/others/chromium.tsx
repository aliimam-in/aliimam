/**
 * Auto-generated logo component: Chromium (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChromiumLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChromiumLogo = React.forwardRef<SVGSVGElement, ChromiumLogoProps>(
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
      <path d="M10.88 21.94 15.46 14" />
  <path d="M21.17 8H12" />
  <path d="M3.95 6.06 8.54 14" />
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  )
);

ChromiumLogo.displayName = "ChromiumLogo";

export const ChromiumLogoMetadata = {
  id: "chromium",
  baseId: "chromium",
  variant: "default",
  name: "Chromium",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChromiumLogo;
