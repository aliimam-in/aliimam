/**
 * Auto-generated logo component: Plug 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Plug2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Plug2Logo = React.forwardRef<SVGSVGElement, Plug2LogoProps>(
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
      <path d="M9 2v6" />
  <path d="M15 2v6" />
  <path d="M12 17v5" />
  <path d="M5 8h14" />
  <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
    </svg>
  )
);

Plug2Logo.displayName = "Plug2Logo";

export const Plug2LogoMetadata = {
  id: "plug-2",
  baseId: "plug-2",
  variant: "default",
  name: "Plug 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Plug2Logo;
