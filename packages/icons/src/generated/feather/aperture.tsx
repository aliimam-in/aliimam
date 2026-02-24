/**
 * Auto-generated logo component: Aperture (default)
 * Category: feather
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
      <circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/>
    </svg>
  )
);

ApertureLogo.displayName = "ApertureLogo";

export const ApertureLogoMetadata = {
  id: "aperture",
  baseId: "aperture",
  variant: "default",
  name: "Aperture",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ApertureLogo;
