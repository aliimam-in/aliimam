/**
 * Auto-generated logo component: Refresh Ccw Dot (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshCcwDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshCcwDotLogo = React.forwardRef<SVGSVGElement, RefreshCcwDotLogoProps>(
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
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
  <path d="M16 16h5v5" />
  <circle cx="12" cy="12" r="1" />
    </svg>
  )
);

RefreshCcwDotLogo.displayName = "RefreshCcwDotLogo";

export const RefreshCcwDotLogoMetadata = {
  id: "refresh-ccw-dot",
  baseId: "refresh-ccw-dot",
  variant: "default",
  name: "Refresh Ccw Dot",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshCcwDotLogo;
