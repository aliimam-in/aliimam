/**
 * Auto-generated logo component: Power (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixPowerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixPowerLogo = React.forwardRef<SVGSVGElement, MixPowerLogoProps>(
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
      <path d="M12 2v10" />
  <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
);

MixPowerLogo.displayName = "MixPowerLogo";

export const MixPowerLogoMetadata = {
  id: "power",
  baseId: "power",
  variant: "default",
  name: "Power",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixPowerLogo;
