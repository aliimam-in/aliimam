/**
 * Auto-generated logo component: Bandage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BandageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BandageOutlineLogo = React.forwardRef<SVGSVGElement, BandageOutlineLogoProps>(
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
      <path d="M14 12l0 .01" />
  <path d="M10 12l0 .01" />
  <path d="M12 10l0 .01" />
  <path d="M12 14l0 .01" />
  <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
    </svg>
  )
);

BandageOutlineLogo.displayName = "BandageOutlineLogo";

export const BandageOutlineLogoMetadata = {
  id: "bandage-outline",
  baseId: "bandage-outline",
  variant: "default",
  name: "Bandage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BandageOutlineLogo;
