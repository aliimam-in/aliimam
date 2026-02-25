/**
 * Auto-generated logo component: Refresh Dot Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RefreshDotOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RefreshDotOutlineLogo = React.forwardRef<SVGSVGElement, RefreshDotOutlineLogoProps>(
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
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

RefreshDotOutlineLogo.displayName = "RefreshDotOutlineLogo";

export const RefreshDotOutlineLogoMetadata = {
  id: "refresh-dot-outline",
  baseId: "refresh-dot-outline",
  variant: "default",
  name: "Refresh Dot Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RefreshDotOutlineLogo;
