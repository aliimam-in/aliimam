/**
 * Auto-generated logo component: Hospital Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HospitalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HospitalOutlineLogo = React.forwardRef<SVGSVGElement, HospitalOutlineLogoProps>(
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
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
  <path d="M10 16v-8" />
  <path d="M14 16v-8" />
  <path d="M10 12h4" />
    </svg>
  )
);

HospitalOutlineLogo.displayName = "HospitalOutlineLogo";

export const HospitalOutlineLogoMetadata = {
  id: "hospital-outline",
  baseId: "hospital-outline",
  variant: "default",
  name: "Hospital Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HospitalOutlineLogo;
