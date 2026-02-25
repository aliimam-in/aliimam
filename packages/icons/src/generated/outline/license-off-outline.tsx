/**
 * Auto-generated logo component: License Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LicenseOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LicenseOffOutlineLogo = React.forwardRef<SVGSVGElement, LicenseOffOutlineLogoProps>(
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
      <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 1 0 4 0v-2m0 -4v-8a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -.864 .126m-2.014 2.025a3 3 0 0 0 -.122 .849v11" />
  <path d="M11 7h2" />
  <path d="M9 11h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LicenseOffOutlineLogo.displayName = "LicenseOffOutlineLogo";

export const LicenseOffOutlineLogoMetadata = {
  id: "license-off-outline",
  baseId: "license-off-outline",
  variant: "default",
  name: "License Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LicenseOffOutlineLogo;
