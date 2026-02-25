/**
 * Auto-generated logo component: Wash Tumble Dry Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashTumbleDryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashTumbleDryOutlineLogo = React.forwardRef<SVGSVGElement, WashTumbleDryOutlineLogoProps>(
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
      <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
  <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </svg>
  )
);

WashTumbleDryOutlineLogo.displayName = "WashTumbleDryOutlineLogo";

export const WashTumbleDryOutlineLogoMetadata = {
  id: "wash-tumble-dry-outline",
  baseId: "wash-tumble-dry-outline",
  variant: "default",
  name: "Wash Tumble Dry Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashTumbleDryOutlineLogo;
