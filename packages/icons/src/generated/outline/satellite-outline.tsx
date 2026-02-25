/**
 * Auto-generated logo component: Satellite Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SatelliteOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SatelliteOutlineLogo = React.forwardRef<SVGSVGElement, SatelliteOutlineLogoProps>(
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
      <path d="M3.707 6.293l2.586 -2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1 -1.414 0l-5.586 -5.586a1 1 0 0 1 0 -1.414" />
  <path d="M6 10l-3 3l3 3l3 -3" />
  <path d="M10 6l3 -3l3 3l-3 3" />
  <path d="M12 12l1.5 1.5" />
  <path d="M14.5 17a2.5 2.5 0 0 0 2.5 -2.5" />
  <path d="M15 21a6 6 0 0 0 6 -6" />
    </svg>
  )
);

SatelliteOutlineLogo.displayName = "SatelliteOutlineLogo";

export const SatelliteOutlineLogoMetadata = {
  id: "satellite-outline",
  baseId: "satellite-outline",
  variant: "default",
  name: "Satellite Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SatelliteOutlineLogo;
