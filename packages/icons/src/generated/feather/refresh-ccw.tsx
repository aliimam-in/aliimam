/**
 * Auto-generated logo component: Refresh Ccw (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshCcwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshCcwLogo = React.forwardRef<SVGSVGElement, RefreshCcwLogoProps>(
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
      <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>
  )
);

RefreshCcwLogo.displayName = "RefreshCcwLogo";

export const RefreshCcwLogoMetadata = {
  id: "refresh-ccw",
  baseId: "refresh-ccw",
  variant: "default",
  name: "Refresh Ccw",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshCcwLogo;
