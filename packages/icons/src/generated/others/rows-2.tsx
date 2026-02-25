/**
 * Auto-generated logo component: Rows 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rows2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rows2Logo = React.forwardRef<SVGSVGElement, Rows2LogoProps>(
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
  <path d="M3 12h18" />
    </svg>
  )
);

Rows2Logo.displayName = "Rows2Logo";

export const Rows2LogoMetadata = {
  id: "rows-2",
  baseId: "rows-2",
  variant: "default",
  name: "Rows 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rows2Logo;
