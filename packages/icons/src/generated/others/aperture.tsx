/**
 * Auto-generated logo component: Aperture (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ApertureLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ApertureLogo = React.forwardRef<SVGSVGElement, ApertureLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="m14.31 8 5.74 9.94" />
  <path d="M9.69 8h11.48" />
  <path d="m7.38 12 5.74-9.94" />
  <path d="M9.69 16 3.95 6.06" />
  <path d="M14.31 16H2.83" />
  <path d="m16.62 12-5.74 9.94" />
    </svg>
  )
);

ApertureLogo.displayName = "ApertureLogo";

export const ApertureLogoMetadata = {
  id: "aperture",
  baseId: "aperture",
  variant: "default",
  name: "Aperture",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApertureLogo;
