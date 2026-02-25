/**
 * Auto-generated logo component: Arrow Down A Z (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownAZLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownAZLogo = React.forwardRef<SVGSVGElement, ArrowDownAZLogoProps>(
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
      <path d="m3 16 4 4 4-4" />
  <path d="M7 20V4" />
  <path d="M20 8h-5" />
  <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
  <path d="M15 14h5l-5 6h5" />
    </svg>
  )
);

ArrowDownAZLogo.displayName = "ArrowDownAZLogo";

export const ArrowDownAZLogoMetadata = {
  id: "arrow-down-a-z",
  baseId: "arrow-down-a-z",
  variant: "default",
  name: "Arrow Down A Z",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownAZLogo;
