/**
 * Auto-generated logo component: Solar Electricity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SolarElectricityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SolarElectricityOutlineLogo = React.forwardRef<SVGSVGElement, SolarElectricityOutlineLogoProps>(
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
      <path d="M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97" />
  <path d="M8 6v12" />
  <path d="M12 12h-8" />
  <path d="M20 7l-3 5h4l-3 5" />
    </svg>
  )
);

SolarElectricityOutlineLogo.displayName = "SolarElectricityOutlineLogo";

export const SolarElectricityOutlineLogoMetadata = {
  id: "solar-electricity-outline",
  baseId: "solar-electricity-outline",
  variant: "default",
  name: "Solar Electricity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SolarElectricityOutlineLogo;
