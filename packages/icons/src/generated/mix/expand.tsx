/**
 * Auto-generated logo component: Expand (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExpandLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExpandLogo = React.forwardRef<SVGSVGElement, ExpandLogoProps>(
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
      <path d="m15 15 6 6" />
  <path d="m15 9 6-6" />
  <path d="M21 16v5h-5" />
  <path d="M21 8V3h-5" />
  <path d="M3 16v5h5" />
  <path d="m3 21 6-6" />
  <path d="M3 8V3h5" />
  <path d="M9 9 3 3" />
    </svg>
  )
);

ExpandLogo.displayName = "ExpandLogo";

export const ExpandLogoMetadata = {
  id: "expand",
  baseId: "expand",
  variant: "default",
  name: "Expand",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExpandLogo;
