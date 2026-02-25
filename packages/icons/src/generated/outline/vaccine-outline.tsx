/**
 * Auto-generated logo component: Vaccine Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VaccineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VaccineOutlineLogo = React.forwardRef<SVGSVGElement, VaccineOutlineLogoProps>(
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
      <path d="M17 3l4 4" />
  <path d="M19 5l-4.5 4.5" />
  <path d="M11.5 6.5l6 6" />
  <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
  <path d="M7.5 12.5l1.5 1.5" />
  <path d="M10.5 9.5l1.5 1.5" />
  <path d="M3 21l3 -3" />
    </svg>
  )
);

VaccineOutlineLogo.displayName = "VaccineOutlineLogo";

export const VaccineOutlineLogoMetadata = {
  id: "vaccine-outline",
  baseId: "vaccine-outline",
  variant: "default",
  name: "Vaccine Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VaccineOutlineLogo;
