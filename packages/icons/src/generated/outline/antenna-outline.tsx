/**
 * Auto-generated logo component: Antenna Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaOutlineLogo = React.forwardRef<SVGSVGElement, AntennaOutlineLogoProps>(
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
  <path d="M12 5v16" />
  <path d="M8 5.5v5" />
  <path d="M4 6v4" />
  <path d="M20 8h-16" />
    </svg>
  )
);

AntennaOutlineLogo.displayName = "AntennaOutlineLogo";

export const AntennaOutlineLogoMetadata = {
  id: "antenna-outline",
  baseId: "antenna-outline",
  variant: "default",
  name: "Antenna Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaOutlineLogo;
