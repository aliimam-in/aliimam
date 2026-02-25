/**
 * Auto-generated logo component: Refresh Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshOutlineLogo = React.forwardRef<SVGSVGElement, RefreshOutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </svg>
  )
);

RefreshOutlineLogo.displayName = "RefreshOutlineLogo";

export const RefreshOutlineLogoMetadata = {
  id: "refresh-outline",
  baseId: "refresh-outline",
  variant: "default",
  name: "Refresh Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshOutlineLogo;
