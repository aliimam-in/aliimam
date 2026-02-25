/**
 * Auto-generated logo component: Hospital Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HospitalCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HospitalCircleOutlineLogo = React.forwardRef<SVGSVGElement, HospitalCircleOutlineLogoProps>(
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
      <path d="M10 16v-8" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M14 16v-8" />
  <path d="M10 12h4" />
    </svg>
  )
);

HospitalCircleOutlineLogo.displayName = "HospitalCircleOutlineLogo";

export const HospitalCircleOutlineLogoMetadata = {
  id: "hospital-circle-outline",
  baseId: "hospital-circle-outline",
  variant: "default",
  name: "Hospital Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HospitalCircleOutlineLogo;
