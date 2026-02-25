/**
 * Auto-generated logo component: Armchair 2 Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Armchair2OffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Armchair2OffOutlineLogo = React.forwardRef<SVGSVGElement, Armchair2OffOutlineLogoProps>(
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
      <path d="M5 10v-4a3 3 0 0 1 .128 -.869m2.038 -2.013c.264 -.078 .544 -.118 .834 -.118h8a3 3 0 0 1 3 3v4" />
  <path d="M16.124 12.145a3 3 0 1 1 3.756 3.724m-.88 3.131h-14v-3a3 3 0 1 1 3 -3v2" />
  <path d="M8 12h4" />
  <path d="M7 19v2" />
  <path d="M17 19v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

Armchair2OffOutlineLogo.displayName = "Armchair2OffOutlineLogo";

export const Armchair2OffOutlineLogoMetadata = {
  id: "armchair-2-off-outline",
  baseId: "armchair-2-off-outline",
  variant: "default",
  name: "Armchair 2 Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Armchair2OffOutlineLogo;
