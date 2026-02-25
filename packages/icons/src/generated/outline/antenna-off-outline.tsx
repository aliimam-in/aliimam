/**
 * Auto-generated logo component: Antenna Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaOffOutlineLogo = React.forwardRef<SVGSVGElement, AntennaOffOutlineLogoProps>(
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
      <path d="M20 4v8" />
  <path d="M16 4.5v7" />
  <path d="M12 5v3m0 4v9" />
  <path d="M8 8v2.5" />
  <path d="M4 6v4" />
  <path d="M20 8h-8m-4 0h-4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AntennaOffOutlineLogo.displayName = "AntennaOffOutlineLogo";

export const AntennaOffOutlineLogoMetadata = {
  id: "antenna-off-outline",
  baseId: "antenna-off-outline",
  variant: "default",
  name: "Antenna Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaOffOutlineLogo;
