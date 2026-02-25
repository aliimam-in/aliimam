/**
 * Auto-generated logo component: Refresh Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshOffOutlineLogo = React.forwardRef<SVGSVGElement, RefreshOffOutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -11.271 -6.305m-2.41 1.624a8.083 8.083 0 0 0 -1.819 2.681m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 13.671 4.691m2.329 -1.691v-1h-1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

RefreshOffOutlineLogo.displayName = "RefreshOffOutlineLogo";

export const RefreshOffOutlineLogoMetadata = {
  id: "refresh-off-outline",
  baseId: "refresh-off-outline",
  variant: "default",
  name: "Refresh Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshOffOutlineLogo;
