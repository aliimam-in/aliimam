/**
 * Auto-generated logo component: Thermometer (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixThermometerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixThermometerLogo = React.forwardRef<SVGSVGElement, MixThermometerLogoProps>(
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
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
);

MixThermometerLogo.displayName = "MixThermometerLogo";

export const MixThermometerLogoMetadata = {
  id: "thermometer",
  baseId: "thermometer",
  variant: "default",
  name: "Thermometer",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixThermometerLogo;
