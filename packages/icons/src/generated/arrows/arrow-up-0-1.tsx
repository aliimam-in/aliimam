/**
 * Auto-generated logo component: Arrow Up 0 1 (default)
 * Category: arrows
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUp01LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUp01Logo = React.forwardRef<SVGSVGElement, ArrowUp01LogoProps>(
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
      <path d="m3 8 4-4 4 4" />
  <path d="M7 4v16" />
  <rect x="15" y="4" width="4" height="6" ry="2" />
  <path d="M17 20v-6h-2" />
  <path d="M15 20h4" />
    </svg>
  )
);

ArrowUp01Logo.displayName = "ArrowUp01Logo";

export const ArrowUp01LogoMetadata = {
  id: "arrow-up-0-1",
  baseId: "arrow-up-0-1",
  variant: "default",
  name: "Arrow Up 0 1",
  category: "arrows",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUp01Logo;
