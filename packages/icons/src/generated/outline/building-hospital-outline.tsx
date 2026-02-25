/**
 * Auto-generated logo component: Building Hospital Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingHospitalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingHospitalOutlineLogo = React.forwardRef<SVGSVGElement, BuildingHospitalOutlineLogoProps>(
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
      <path d="M3 21l18 0" />
  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  <path d="M10 9l4 0" />
  <path d="M12 7l0 4" />
    </svg>
  )
);

BuildingHospitalOutlineLogo.displayName = "BuildingHospitalOutlineLogo";

export const BuildingHospitalOutlineLogoMetadata = {
  id: "building-hospital-outline",
  baseId: "building-hospital-outline",
  variant: "default",
  name: "Building Hospital Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingHospitalOutlineLogo;
