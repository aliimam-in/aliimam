/**
 * Auto-generated logo component: Layout List (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LayoutListLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LayoutListLogo = React.forwardRef<SVGSVGElement, LayoutListLogoProps>(
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
  <rect width="7" height="7" x="3" y="14" rx="1" />
  <path d="M14 4h7" />
  <path d="M14 9h7" />
  <path d="M14 15h7" />
  <path d="M14 20h7" />
    </svg>
  )
);

LayoutListLogo.displayName = "LayoutListLogo";

export const LayoutListLogoMetadata = {
  id: "layout-list",
  baseId: "layout-list",
  variant: "default",
  name: "Layout List",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LayoutListLogo;
