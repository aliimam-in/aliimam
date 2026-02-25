/**
 * Auto-generated logo component: Lego Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LegoOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LegoOffOutlineLogo = React.forwardRef<SVGSVGElement, LegoOffOutlineLogoProps>(
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
      <path d="M9.5 11h.01" />
  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
  <path d="M8 4v-1h8v2h1a3 3 0 0 1 3 3v8m-.884 3.127a2.99 2.99 0 0 1 -2.116 .873v1h-10v-1a3 3 0 0 1 -3 -3v-9c0 -1.083 .574 -2.032 1.435 -2.56" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LegoOffOutlineLogo.displayName = "LegoOffOutlineLogo";

export const LegoOffOutlineLogoMetadata = {
  id: "lego-off-outline",
  baseId: "lego-off-outline",
  variant: "default",
  name: "Lego Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LegoOffOutlineLogo;
