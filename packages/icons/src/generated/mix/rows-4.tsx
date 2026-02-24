/**
 * Auto-generated logo component: Rows 4 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rows4LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rows4Logo = React.forwardRef<SVGSVGElement, Rows4LogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M21 7.5H3" />
  <path d="M21 12H3" />
  <path d="M21 16.5H3" />
    </svg>
  )
);

Rows4Logo.displayName = "Rows4Logo";

export const Rows4LogoMetadata = {
  id: "rows-4",
  baseId: "rows-4",
  variant: "default",
  name: "Rows 4",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rows4Logo;
