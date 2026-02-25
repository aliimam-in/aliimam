/**
 * Auto-generated logo component: Router (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RouterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RouterLogo = React.forwardRef<SVGSVGElement, RouterLogoProps>(
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
      <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6.01 18H6" />
  <path d="M10.01 18H10" />
  <path d="M15 10v4" />
  <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
  <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
    </svg>
  )
);

RouterLogo.displayName = "RouterLogo";

export const RouterLogoMetadata = {
  id: "router",
  baseId: "router",
  variant: "default",
  name: "Router",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RouterLogo;
