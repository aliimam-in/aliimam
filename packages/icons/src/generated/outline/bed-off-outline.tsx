/**
 * Auto-generated logo component: Bed Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BedOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BedOffOutlineLogo = React.forwardRef<SVGSVGElement, BedOffOutlineLogoProps>(
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
      <path d="M7 7a2 2 0 1 0 2 2" />
  <path d="M22 17v-3h-4m-4 0h-12" />
  <path d="M2 8v9" />
  <path d="M12 12v2h2m4 0h4v-2a3 3 0 0 0 -3 -3h-6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BedOffOutlineLogo.displayName = "BedOffOutlineLogo";

export const BedOffOutlineLogoMetadata = {
  id: "bed-off-outline",
  baseId: "bed-off-outline",
  variant: "default",
  name: "Bed Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BedOffOutlineLogo;
