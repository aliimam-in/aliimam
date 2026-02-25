/**
 * Auto-generated logo component: Shower Head (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShowerHeadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShowerHeadLogo = React.forwardRef<SVGSVGElement, ShowerHeadLogoProps>(
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
      <path d="m4 4 2.5 2.5" />
  <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
  <path d="M15 5 5 15" />
  <path d="M14 17v.01" />
  <path d="M10 16v.01" />
  <path d="M13 13v.01" />
  <path d="M16 10v.01" />
  <path d="M11 20v.01" />
  <path d="M17 14v.01" />
  <path d="M20 11v.01" />
    </svg>
  )
);

ShowerHeadLogo.displayName = "ShowerHeadLogo";

export const ShowerHeadLogoMetadata = {
  id: "shower-head",
  baseId: "shower-head",
  variant: "default",
  name: "Shower Head",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShowerHeadLogo;
