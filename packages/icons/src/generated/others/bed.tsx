/**
 * Auto-generated logo component: Bed (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BedLogo = React.forwardRef<SVGSVGElement, BedLogoProps>(
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
      <path d="M2 4v16" />
  <path d="M2 8h18a2 2 0 0 1 2 2v10" />
  <path d="M2 17h20" />
  <path d="M6 8v9" />
    </svg>
  )
);

BedLogo.displayName = "BedLogo";

export const BedLogoMetadata = {
  id: "bed",
  baseId: "bed",
  variant: "default",
  name: "Bed",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BedLogo;
