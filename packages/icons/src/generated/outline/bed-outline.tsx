/**
 * Auto-generated logo component: Bed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BedOutlineLogo = React.forwardRef<SVGSVGElement, BedOutlineLogoProps>(
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
      <path d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M22 17v-3h-20" />
  <path d="M2 8v9" />
  <path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5" />
    </svg>
  )
);

BedOutlineLogo.displayName = "BedOutlineLogo";

export const BedOutlineLogoMetadata = {
  id: "bed-outline",
  baseId: "bed-outline",
  variant: "default",
  name: "Bed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BedOutlineLogo;
