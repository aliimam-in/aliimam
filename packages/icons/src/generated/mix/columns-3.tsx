/**
 * Auto-generated logo component: Columns 3 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Columns3LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Columns3Logo = React.forwardRef<SVGSVGElement, Columns3LogoProps>(
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
  <path d="M9 3v18" />
  <path d="M15 3v18" />
    </svg>
  )
);

Columns3Logo.displayName = "Columns3Logo";

export const Columns3LogoMetadata = {
  id: "columns-3",
  baseId: "columns-3",
  variant: "default",
  name: "Columns 3",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Columns3Logo;
