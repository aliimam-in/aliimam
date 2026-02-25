/**
 * Auto-generated logo component: License Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LicenseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LicenseOutlineLogo = React.forwardRef<SVGSVGElement, LicenseOutlineLogoProps>(
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
      <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
  <path d="M9 7l4 0" />
  <path d="M9 11l4 0" />
    </svg>
  )
);

LicenseOutlineLogo.displayName = "LicenseOutlineLogo";

export const LicenseOutlineLogoMetadata = {
  id: "license-outline",
  baseId: "license-outline",
  variant: "default",
  name: "License Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LicenseOutlineLogo;
