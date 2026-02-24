/**
 * Auto-generated logo component: Crosshair (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCrosshairLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCrosshairLogo = React.forwardRef<SVGSVGElement, MixCrosshairLogoProps>(
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
  <line x1="22" x2="18" y1="12" y2="12" />
  <line x1="6" x2="2" y1="12" y2="12" />
  <line x1="12" x2="12" y1="6" y2="2" />
  <line x1="12" x2="12" y1="22" y2="18" />
    </svg>
  )
);

MixCrosshairLogo.displayName = "MixCrosshairLogo";

export const MixCrosshairLogoMetadata = {
  id: "crosshair",
  baseId: "crosshair",
  variant: "default",
  name: "Crosshair",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCrosshairLogo;
