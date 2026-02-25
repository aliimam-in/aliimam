/**
 * Auto-generated logo component: Glass Champagne Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlassChampagneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlassChampagneOutlineLogo = React.forwardRef<SVGSVGElement, GlassChampagneOutlineLogoProps>(
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
      <path d="M9 21h6" />
  <path d="M12 16v5" />
  <path d="M8 5a4 2 0 1 0 8 0a4 2 0 1 0 -8 0" />
  <path d="M8 5c0 6.075 1.79 11 4 11s4 -4.925 4 -11" />
    </svg>
  )
);

GlassChampagneOutlineLogo.displayName = "GlassChampagneOutlineLogo";

export const GlassChampagneOutlineLogoMetadata = {
  id: "glass-champagne-outline",
  baseId: "glass-champagne-outline",
  variant: "default",
  name: "Glass Champagne Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlassChampagneOutlineLogo;
