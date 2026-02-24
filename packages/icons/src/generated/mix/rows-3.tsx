/**
 * Auto-generated logo component: Rows 3 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Rows3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Rows3Logo = React.forwardRef<SVGSVGElement, Rows3LogoProps>(
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
  <path d="M21 9H3" />
  <path d="M21 15H3" />
    </svg>
  )
);

Rows3Logo.displayName = "Rows3Logo";

export const Rows3LogoMetadata = {
  id: "rows-3",
  baseId: "rows-3",
  variant: "default",
  name: "Rows 3",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rows3Logo;
