/**
 * Auto-generated logo component: Bed Flat Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BedFlatFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BedFlatFilledLogo = React.forwardRef<SVGSVGElement, BedFlatFilledLogoProps>(
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
      <path d="M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
  <path d="M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
  <path d="M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" />
    </svg>
  )
);

BedFlatFilledLogo.displayName = "BedFlatFilledLogo";

export const BedFlatFilledLogoMetadata = {
  id: "bed-flat-filled",
  baseId: "bed-flat-filled",
  variant: "default",
  name: "Bed Flat Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BedFlatFilledLogo;
