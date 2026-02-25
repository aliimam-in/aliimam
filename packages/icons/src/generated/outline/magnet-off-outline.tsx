/**
 * Auto-generated logo component: Magnet Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MagnetOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MagnetOffOutlineLogo = React.forwardRef<SVGSVGElement, MagnetOffOutlineLogoProps>(
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
      <path d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578m.448 -3.578v-6a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1 -.424 2.577m-1.463 2.584a8 8 0 0 1 -14.113 -5.161v-8c0 -.297 .065 -.58 .181 -.833" />
  <path d="M4 8h4" />
  <path d="M15 8h4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MagnetOffOutlineLogo.displayName = "MagnetOffOutlineLogo";

export const MagnetOffOutlineLogoMetadata = {
  id: "magnet-off-outline",
  baseId: "magnet-off-outline",
  variant: "default",
  name: "Magnet Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MagnetOffOutlineLogo;
