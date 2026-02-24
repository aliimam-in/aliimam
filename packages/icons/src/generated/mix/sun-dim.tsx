/**
 * Auto-generated logo component: Sun Dim (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunDimLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunDimLogo = React.forwardRef<SVGSVGElement, SunDimLogoProps>(
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
      <circle cx="12" cy="12" r="4" />
  <path d="M12 4h.01" />
  <path d="M20 12h.01" />
  <path d="M12 20h.01" />
  <path d="M4 12h.01" />
  <path d="M17.657 6.343h.01" />
  <path d="M17.657 17.657h.01" />
  <path d="M6.343 17.657h.01" />
  <path d="M6.343 6.343h.01" />
    </svg>
  )
);

SunDimLogo.displayName = "SunDimLogo";

export const SunDimLogoMetadata = {
  id: "sun-dim",
  baseId: "sun-dim",
  variant: "default",
  name: "Sun Dim",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunDimLogo;
