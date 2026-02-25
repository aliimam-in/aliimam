/**
 * Auto-generated logo component: Arrow Down 1 0 (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDown10LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDown10Logo = React.forwardRef<SVGSVGElement, ArrowDown10LogoProps>(
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
  <path d="M17 10V4h-2" />
  <path d="M15 10h4" />
  <rect x="15" y="14" width="4" height="6" ry="2" />
    </svg>
  )
);

ArrowDown10Logo.displayName = "ArrowDown10Logo";

export const ArrowDown10LogoMetadata = {
  id: "arrow-down-1-0",
  baseId: "arrow-down-1-0",
  variant: "default",
  name: "Arrow Down 1 0",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDown10Logo;
