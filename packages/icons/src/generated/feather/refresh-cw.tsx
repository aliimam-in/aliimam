/**
 * Auto-generated logo component: Refresh Cw (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshCwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshCwLogo = React.forwardRef<SVGSVGElement, RefreshCwLogoProps>(
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
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  )
);

RefreshCwLogo.displayName = "RefreshCwLogo";

export const RefreshCwLogoMetadata = {
  id: "refresh-cw",
  baseId: "refresh-cw",
  variant: "default",
  name: "Refresh Cw",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshCwLogo;
