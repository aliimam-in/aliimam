/**
 * Auto-generated logo component: Bandage Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BandageOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BandageOffOutlineLogo = React.forwardRef<SVGSVGElement, BandageOffOutlineLogoProps>(
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
      <path d="M10 12v.01" />
  <path d="M12 14v.01" />
  <path d="M10.513 6.487l1.987 -1.987a4.95 4.95 0 0 1 7 7l-2.018 2.018m-1.982 1.982l-4 4a4.95 4.95 0 0 1 -7 -7l4 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BandageOffOutlineLogo.displayName = "BandageOffOutlineLogo";

export const BandageOffOutlineLogoMetadata = {
  id: "bandage-off-outline",
  baseId: "bandage-off-outline",
  variant: "default",
  name: "Bandage Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BandageOffOutlineLogo;
