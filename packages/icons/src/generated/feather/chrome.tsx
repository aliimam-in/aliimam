/**
 * Auto-generated logo component: Chrome (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChromeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChromeLogo = React.forwardRef<SVGSVGElement, ChromeLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
    </svg>
  )
);

ChromeLogo.displayName = "ChromeLogo";

export const ChromeLogoMetadata = {
  id: "chrome",
  baseId: "chrome",
  variant: "default",
  name: "Chrome",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChromeLogo;
