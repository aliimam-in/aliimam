/**
 * Auto-generated logo component: Sun Electricity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunElectricityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunElectricityOutlineLogo = React.forwardRef<SVGSVGElement, SunElectricityOutlineLogoProps>(
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
      <path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" />
  <path d="M3 12h1" />
  <path d="M12 3v1" />
  <path d="M12 20v1" />
  <path d="M5.6 5.6l.7 .7" />
  <path d="M6.3 17.7l-.7 .7" />
  <path d="M20 7l-3 5h4l-3 5" />
    </svg>
  )
);

SunElectricityOutlineLogo.displayName = "SunElectricityOutlineLogo";

export const SunElectricityOutlineLogoMetadata = {
  id: "sun-electricity-outline",
  baseId: "sun-electricity-outline",
  variant: "default",
  name: "Sun Electricity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunElectricityOutlineLogo;
